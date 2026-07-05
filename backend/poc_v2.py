"""Semantic context switcher — POC v2.

Architecture changes vs. poc.py:
  - Explicit `active_segment` reference instead of `segments[-1]` (reopens now
    switch the active segment to the reopened one, so subsequent items continue
    the topic instead of orphaning it).
  - Centroid is a running mean over ALL item embeddings (user, agent, code),
    computed O(1) via running sum + count — no per-append `np.stack`/`mean`.
  - Operational items (db/vscode/terminal/build) are captioned with their source
    type before embedding ("SQL: ...", "Code: ...") so mpnet can place them
    near prose about the same topic.
  - Operational rule: bind to active segment only if the active segment's last
    item is within OPERATIONAL_PROXIMITY minutes. Otherwise open a new segment
    (a stray SQL after a long gap shouldn't glom onto an unrelated topic).
  - request_id -> segment lookup is a dict, O(1). Updated on every attach.
  - `_reopen` dead/broken code removed. Reopen is a one-liner inline.
  - `ended_at` stamps use the timestamp of the segment's own last item, not
    the routing item's ts (the original was mislabeling closed segments).
  - MIN_SEGMENT_SIZE_FOR_REOPEN dropped: with the active_segment fix, small
    reopenable segments are no longer noise risk.

Usage:
    python poc_v2.py interactions.jsonl
    POC_DEBUG=1 python poc_v2.py interactions.jsonl
    POC_HIGH=0.6 POC_LOW=0.5 python poc_v2.py interactions.jsonl
    POC_MODEL=all-mpnet-base-v2 python poc_v2.py interactions.jsonl
"""

from __future__ import annotations

import json
import os
import sys
from dataclasses import dataclass, field
from datetime import datetime, timedelta
from pathlib import Path
from typing import Optional

import numpy as np
from sentence_transformers import SentenceTransformer

DEBUG = os.environ.get("POC_DEBUG") == "1"


HIGH = 0.78
LOW = 0.55
REOPEN_AGE_HOURS = 8
REOPEN_LOOKBACK = 20
TINY_SEGMENT_SIZE = 2
TINY_ABSORB_SIM = LOW
OPERATIONAL_PROXIMITY_MIN = 15
OPERATIONAL_SOURCES = frozenset({"db", "vscode", "terminal", "build"})
OPERATIONAL_CAPTIONS = {
    "db": "SQL",
    "vscode": "Code",
    "terminal": "Command",
    "build": "Build",
}

# Time-decayed similarity boost for the active segment. A recently-touched
# segment is more likely to still be the current topic; a 2-word reply ("ok")
# that embeds as topic-less should still bind if it arrives 5s after the last
# item. Effective sim for the active comparison is:
#   sim * (1 + TIME_BOOST_AMPLITUDE * exp(-dt_min / TIME_BOOST_TAU_MIN))
# At dt=0:  sim * (1 + 0.20) = sim * 1.20
# At dt=5m: sim * (1 + 0.20 * e^-0.5) ≈ sim * 1.122
# At dt=15m: sim * (1 + 0.20 * e^-1.5) ≈ sim * 1.045
# At dt=30m: sim * 1.005  (essentially no boost)
TIME_BOOST_AMPLITUDE = 0.20
TIME_BOOST_TAU_MIN = 10.0

# Dynamic alpha centroid. On each attach:
#   centroid = normalize(alpha * centroid + (1 - alpha) * item_emb)
# Higher alpha = old centroid dominates (stable topic).
# Lower alpha  = new item dominates (responsive to topic drift within segment).
#
# alpha is computed per-attach as alpha_fn(alpha_k, sim, n):
#   - sim: similarity of incoming item to current centroid
#   - n:   items already in segment (before this attach)
#
# Three functions are implemented:
#
#   A (sigmoid): alpha_base = sigmoid(k * (sim - 0.5))
#                trust_n   = 1 - 1 / (1 + k * log1p(n))
#                alpha     = alpha_base + (1 - alpha_base) * trust_n
#     k in [0.5, 3.0]; k=1.0 is the reference default.
#     Trust builds logarithmically in n — small segments stay humble.
#
#   B (linear):  alpha_base = clip(k * sim, 0, 0.99)
#                w_n       = 1 - 1 / (1 + k * n)
#                alpha     = alpha_base * (1 - w_n) + w_n
#     k in [0.0, 2.0]; k=1.0 means alpha_base tracks sim directly.
#     Maturity saturates to k as n grows; one knob.
#
#   C (log damp): alpha_base = sigmoid(k * (sim - 0.5))
#                 maturity_n = 1 - exp(-k * n)
#                 alpha     = alpha_base + (1 - alpha_base) * maturity_n
#     k in [0.1, 1.0]; k=0.3 reaches maturity ~0.95 at n=10.
#     Maturity rises exponentially; reaches high alpha quickly on long segments.
#
# Note: high sim AND high n both raise alpha (trust both the new item and the
# bulk). Low sim AND low n both lower alpha (let youthful centroid evolve).

def _sigmoid(x: float) -> float:
    if x >= 0:
        z = np.exp(-x)
        return 1.0 / (1.0 + z)
    z = np.exp(x)
    return z / (1.0 + z)


def _alpha_A(k: float, sim: float, n: int) -> float:
    base = _sigmoid(k * (sim - 0.5))
    trust = 1.0 - 1.0 / (1.0 + k * np.log1p(max(0, n)))
    return base + (1.0 - base) * trust


def _alpha_B(k: float, sim: float, n: int) -> float:
    base = min(k * sim, 0.99)
    w = 1.0 - 1.0 / (1.0 + k * max(0, n))
    return base * (1.0 - w) + w


def _alpha_C(k: float, sim: float, n: int) -> float:
    base = _sigmoid(k * (sim - 0.5))
    maturity = 1.0 - np.exp(-k * max(0, n))
    return base + (1.0 - base) * maturity


ALPHA_FNS = {
    "A": _alpha_A,
    "B": _alpha_B,
    "C": _alpha_C,
}

DEFAULT_K_PER_FN: dict[str, list[float]] = {
    "A": [0.5, 1.0, 2.0],
    "B": [0.5, 1.0, 1.5],
    "C": [0.1, 0.3, 0.6],
}

ALPHA_FLOOR = 0.05   # never let alpha collapse to 0 (avoid pure new-item centroid)
ALPHA_CEIL = 0.99    # never let alpha hit 1 (avoid frozen centroid)


def compute_alpha(fn_name: str, k: float, sim: float, n: int) -> float:
    fn = ALPHA_FNS[fn_name]
    a = fn(k, sim, n)
    if a > ALPHA_CEIL:
        return ALPHA_CEIL
    if a < ALPHA_FLOOR:
        return ALPHA_FLOOR
    return float(a)


def _env_float(name: str, default: float) -> float:
    raw = os.environ.get(name)
    return float(raw) if raw is not None else default


HIGH = _env_float("POC_HIGH", HIGH)
LOW = _env_float("POC_LOW", LOW)


@dataclass
class Item:
    id: int
    ts: datetime
    source: str
    role: str
    text: str
    emb: np.ndarray
    request_id: Optional[int] = None

    @property
    def truncated_text(self) -> str:
        s = self.text.replace("\n", " ").strip()
        return s[:77] + "..." if len(s) > 80 else s

    @property
    def is_agent(self) -> bool:
        return self.role != "user"

    @property
    def is_operational(self) -> bool:
        return self.source in OPERATIONAL_SOURCES


@dataclass
class Segment:
    id: int
    started_at: datetime
    centroid: np.ndarray
    ended_at: Optional[datetime] = None
    items: list[Item] = field(default_factory=list)
    soft_boundaries: list[tuple[int, float]] = field(default_factory=list)
    reopened_from: Optional[int] = None

    @property
    def is_open(self) -> bool:
        return self.ended_at is None

    @property
    def last_ts(self) -> Optional[datetime]:
        return self.items[-1].ts if self.items else None


class UniXcoderEmbedder:
    """Adapter so microsoft/unixcoder-base quacks like SentenceTransformer.encode().

    Uses encoder-only mode per the model card: tokenise with mode='<encoder-only>',
    run the forward pass, mean-pool token embeddings over the attention mask, then
    L2-normalise. Returns a (n, 768) numpy array for a list/string input.
    """

    def __init__(self, name: str) -> None:
        import torch
        from transformers import AutoModel, AutoTokenizer
        self._torch = torch
        device = "cuda" if torch.cuda.is_available() else "cpu"
        self.tokenizer = AutoTokenizer.from_pretrained(name, trust_remote_code=True)
        self.model = AutoModel.from_pretrained(name, trust_remote_code=True).to(device).eval()
        self.device = device
        self.max_length = 512

    def encode(self, texts, normalize_embeddings: bool = True) -> np.ndarray:
        torch = self._torch
        single = isinstance(texts, str)
        if single:
            texts = [texts]
        token_ids = self.tokenizer(
            texts,
            max_length=self.max_length,
            padding=True,
            truncation=True,
            return_tensors="pt",
        ).to(self.device)
        with torch.no_grad():
            out = self.model(**token_ids, output_hidden_states=False)
        last_hidden = out.last_hidden_state
        mask = token_ids["attention_mask"].unsqueeze(-1).float()
        summed = (last_hidden * mask).sum(dim=1)
        counts = mask.sum(dim=1).clamp(min=1e-9)
        emb = summed / counts
        if normalize_embeddings:
            emb = torch.nn.functional.normalize(emb, p=2, dim=1)
        arr = emb.cpu().numpy().astype(np.float32)
        return arr[0] if single else arr


_models: dict[str, SentenceTransformer] = {}


def get_model(name: str) -> SentenceTransformer:
    """Load a model by name; cache by name. Returns anything with .encode()."""
    m = _models.get(name)
    if m is None:
        m = SentenceTransformer(name)
        _models[name] = m
    return m


def caption_text(item_text: str, source: str) -> str:
    tag = OPERATIONAL_CAPTIONS.get(source)
    return f"{tag}: {item_text}" if tag else item_text


def embed_with(model: SentenceTransformer, text: str) -> np.ndarray:
    return model.encode(text, normalize_embeddings=True).numpy()


def l2_normalize(v: np.ndarray) -> np.ndarray:
    n = float(np.linalg.norm(v))
    return v if n == 0.0 else v / n


class ContextMachine:
    def __init__(
        self,
        alpha_fn: str = "A",
        alpha_k: float = 1.0,
    ) -> None:
        if alpha_fn not in ALPHA_FNS:
            raise ValueError(f"unknown alpha_fn {alpha_fn!r}; pick from {list(ALPHA_FNS)}")
        self.alpha_fn = alpha_fn
        self.alpha_k = alpha_k
        self.segments: list[Segment] = []
        self.active: Optional[Segment] = None
        self.req_index: dict[int, int] = {}

    def push(self, item: Item) -> str:
        """Route `item`; return one of: new, append, soft, reopen, agent, op."""
        if item.is_agent and item.request_id is not None:
            seg_id = self.req_index.get(item.request_id)
            if seg_id is not None:
                target = self._seg_by_id(seg_id)
                if target is not None:
                    self._attach(target, item, sim=1.0, soft=False)
                    self._extend_segment_active(target)
                    if DEBUG:
                        print(
                            f"[item {item.id}] agent reply to req={item.request_id} "
                            f"-> attach to seg #{target.id} (now active)",
                            file=sys.stderr,
                        )
                    return "agent"
            if DEBUG:
                print(
                    f"[item {item.id}] agent reply to req={item.request_id} "
                    f"unknown; falling through to prose logic",
                    file=sys.stderr,
                )

        if not self.segments:
            seg = self._open_segment(item)
            if DEBUG:
                print(f"[item {item.id}] no segments -> open #{seg.id}", file=sys.stderr)
            return "new"

        if item.is_operational and self.active is not None and self.active.items:
            last_ts = self.active.last_ts
            assert last_ts is not None
            if abs((item.ts - last_ts).total_seconds()) <= OPERATIONAL_PROXIMITY_MIN * 60:
                self._attach(self.active, item, sim=1.0, soft=False)
                if DEBUG:
                    print(
                        f"[item {item.id}] operational (source={item.source}) within "
                        f"{OPERATIONAL_PROXIMITY_MIN}m of active #{self.active.id} -> op",
                        file=sys.stderr,
                    )
                return "op"
            if DEBUG:
                print(
                    f"[item {item.id}] operational but no prose within "
                    f"{OPERATIONAL_PROXIMITY_MIN}m; falling through",
                    file=sys.stderr,
                )

        assert self.active is not None
        current = self.active
        sim = float(np.dot(item.emb, current.centroid))

        # Apply a time-decayed boost to the active-segment similarity: recent
        # items are more likely to still be on the same topic. The boost is
        # multiplicative on sim and decays exponentially with delta minutes.
        last_ts = current.last_ts
        boost = 1.0
        if last_ts is not None:
            dt_min = abs((item.ts - last_ts).total_seconds()) / 60.0
            boost = 1.0 + TIME_BOOST_AMPLITUDE * np.exp(-dt_min / TIME_BOOST_TAU_MIN)
        effective_sim = sim * boost

        if DEBUG:
            boost_str = (
                f"boost={boost:.3f} -> eff={effective_sim:.3f}"
                if last_ts is not None and (last_ts - item.ts).total_seconds() != 0
                else "no boost"
            )
        else:
            boost_str = ""

        if effective_sim >= HIGH:
            self._attach(current, item, sim, soft=False)
            if DEBUG:
                print(
                    f"[item {item.id}] sim={sim:.3f} {boost_str} >= HIGH={HIGH:.2f} vs "
                    f"active #{current.id} -> append",
                    file=sys.stderr,
                )
            return "append"

        if effective_sim >= LOW:
            self._attach(current, item, sim, soft=True)
            if DEBUG:
                print(
                    f"[item {item.id}] sim={sim:.3f} {boost_str} in [LOW,HIGH) vs "
                    f"active #{current.id} -> soft",
                    file=sys.stderr,
                )
            return "soft"

        comparison_sim = effective_sim

        cutoff = item.ts - timedelta(hours=REOPEN_AGE_HOURS)
        candidates = [
            s for s in self.segments
            if s is not current and s.ended_at is not None and s.ended_at >= cutoff
        ]
        candidates.reverse()
        candidates = candidates[:REOPEN_LOOKBACK]

        if DEBUG:
            print(
                f"[item {item.id}] sim={sim:.3f} < LOW vs active #{current.id}; "
                f"checking {len(candidates)} reopen candidate(s) "
                f"(window={REOPEN_AGE_HOURS}h, cutoff={cutoff.isoformat(timespec='seconds')})",
                file=sys.stderr,
            )

        best_old: Optional[Segment] = None
        best_old_sim = -1.0
        for old in candidates:
            old_sim = float(np.dot(item.emb, old.centroid))
            if DEBUG:
                ended_at = old.ended_at
                ended_str = ended_at.isoformat(timespec="seconds") if ended_at else "?"
                print(
                    f"    seg #{old.id} (ended={ended_str}, size={len(old.items)}): "
                    f"sim={old_sim:.3f}",
                    file=sys.stderr,
                )
            if old_sim >= HIGH and old_sim > best_old_sim:
                best_old = old
                best_old_sim = old_sim

        if best_old is not None:
            self._close(current, current.last_ts)
            best_old.ended_at = None
            if best_old.reopened_from is None:
                best_old.reopened_from = best_old.id
            self._attach(best_old, item, sim, soft=False)
            self.active = best_old
            if DEBUG:
                print(
                    f"    -> reopen seg #{best_old.id} (sim={best_old_sim:.3f}); "
                    f"now active",
                    file=sys.stderr,
                )
            return "reopen"

        if DEBUG:
            print(
                f"    -> no candidate >= HIGH={HIGH:.2f}; opening new",
                file=sys.stderr,
            )
        self._close(current, current.last_ts)
        self._open_segment(item)
        return "new"

    def _seg_by_id(self, seg_id: int) -> Optional[Segment]:
        for s in self.segments:
            if s.id == seg_id:
                return s
        return None

    def _extend_segment_active(self, seg: Segment) -> None:
        self.active = seg

    def _open_segment(self, item: Item) -> Segment:
        seg = Segment(
            id=len(self.segments) + 1,
            started_at=item.ts,
            ended_at=None,
            centroid=item.emb.copy(),
        )
        seg.items.append(item)
        self.segments.append(seg)
        self.active = seg
        self.req_index[item.id] = seg.id
        return seg

    def _attach(self, seg: Segment, item: Item, sim: float, soft: bool) -> None:
        seg.items.append(item)
        assert seg.centroid is not None
        n_before = len(seg.items) - 1
        alpha = compute_alpha(self.alpha_fn, self.alpha_k, sim, n_before)
        seg.centroid = l2_normalize(alpha * seg.centroid + (1.0 - alpha) * item.emb)
        if soft:
            seg.soft_boundaries.append((item.id, sim))
        if seg.ended_at is not None:
            seg.ended_at = None
        self.req_index[item.id] = seg.id

    def _close(self, seg: Segment, ts: Optional[datetime]) -> None:
        if seg.ended_at is None and ts is not None:
            seg.ended_at = ts


    def _recompute_centroid_ema(self, items: list[Item]) -> np.ndarray:
        """Replay the dynamic-alpha update forward over `items`; return centroid."""
        assert items, "cannot recompute centroid over empty item list"
        centroid = items[0].emb.copy()
        for n, it in enumerate(items[1:], start=1):
            sim = float(np.dot(it.emb, centroid))
            alpha = compute_alpha(self.alpha_fn, self.alpha_k, sim, n)
            centroid = l2_normalize(alpha * centroid + (1.0 - alpha) * it.emb)
        return centroid

    def cleanup_pass(self) -> None:
        """Absorb tiny segments into a similar predecessor. Bounded to one hop."""
        i = 1
        while i < len(self.segments):
            seg = self.segments[i]
            if len(seg.items) > TINY_SEGMENT_SIZE:
                if DEBUG:
                    print(
                        f"  [cleanup] skip #{seg.id} ({len(seg.items)} items > "
                        f"TINY_SEGMENT_SIZE={TINY_SEGMENT_SIZE})",
                        file=sys.stderr,
                    )
                i += 1
                continue
            prev = self.segments[i - 1]
            if prev.centroid is None or seg.centroid is None:
                if DEBUG:
                    print(
                        f"  [cleanup] skip #{seg.id} ({len(seg.items)} items) — "
                        f"missing centroid",
                        file=sys.stderr,
                    )
                i += 1
                continue
            sim = float(np.dot(prev.centroid, seg.centroid))
            if DEBUG:
                print(
                    f"  [cleanup] #{prev.id}({len(prev.items)}) <-> #{seg.id}"
                    f"({len(seg.items)}) sim={sim:.3f} "
                    f"vs TINY_ABSORB_SIM={TINY_ABSORB_SIM:.2f} "
                    f"{'ABSORB' if sim >= TINY_ABSORB_SIM else 'skip'}",
                    file=sys.stderr,
                )
            if sim >= TINY_ABSORB_SIM:
                prev.items.extend(seg.items)
                prev.centroid = self._recompute_centroid_ema(prev.items)
                if prev.ended_at is None or (
                    seg.ended_at is not None and seg.ended_at > prev.ended_at
                ):
                    prev.ended_at = seg.ended_at
                prev.soft_boundaries.extend(seg.soft_boundaries)
                self.segments.pop(i)
            else:
                i += 1


def parse_records(path: Path) -> list[dict]:
    """Parse JSONL into a list of raw dicts, sorted by ts. No embedding."""
    records: list[dict] = []
    for raw in path.read_text().splitlines():
        line = raw.strip()
        if not line or line.startswith("#"):
            continue
        records.append(json.loads(line))
    records.sort(key=lambda d: d["ts"])
    return records


def build_items(records: list[dict], model: SentenceTransformer) -> list[Item]:
    """Embed each record's captioned text with `model` and produce Items."""
    items: list[Item] = []
    for i, d in enumerate(records):
        text = d["text"]
        source = d.get("source", "unknown")
        captioned = caption_text(text, source)
        items.append(
            Item(
                id=i,
                ts=datetime.fromisoformat(d["ts"]),
                source=source,
                role=d.get("role", "user"),
                text=text,
                emb=embed_with(model, captioned),
                request_id=d.get("request_id"),
            )
        )
    return items


def _fmt_ts(ts: datetime) -> str:
    return ts.strftime("%H:%M:%S")


def print_segments(segments: list[Segment], trace: list[tuple[Item, str]]) -> None:
    print("=" * 72)
    print(f"  {len(segments)} segment(s), {sum(len(s.items) for s in segments)} item(s) total")
    print("=" * 72)
    print()
    action_icons = {"new": "+", "append": ">", "soft": "~", "reopen": "<", "agent": "^", "op": "="}
    for seg in segments:
        started = _fmt_ts(seg.started_at)
        ended = "open" if seg.ended_at is None else _fmt_ts(seg.ended_at)
        header = f"=== Segment {seg.id} ({started} → {ended}) — {len(seg.items)} item(s)"
        if seg.reopened_from is not None and seg.reopened_from != seg.id:
            header += f" [REOPENED from #{seg.reopened_from}]"
        elif seg.reopened_from == seg.id:
            header += " [REOPENED]"
        print(header)
        print("-" * len(header))
        action_by_item = {it.id: act for it, act in trace}
        for it in seg.items:
            act = action_by_item.get(it.id, "?")
            icon = action_icons.get(act, "?")
            print(
                f"  [{_fmt_ts(it.ts)}] {icon} {it.role:<5} {it.source:<8} "
                f"\"{it.truncated_text}\""
            )
        for soft_id, soft_sim in seg.soft_boundaries:
            soft_item = next((it for it in seg.items if it.id == soft_id), None)
            if soft_item is not None:
                print(
                    f"    (soft boundary at item {soft_id} "
                    f"\"{soft_item.truncated_text}\": sim={soft_sim:.3f})"
                )
        print()


def embed_records(records: list[dict], model_name: str) -> list[Item]:
    """Embed each record's captioned text with `model_name` and return Items."""
    model = get_model(model_name)
    return build_items(records, model)


def run_one(
    items: list[Item],
    alpha_fn: str,
    alpha_k: float,
) -> tuple[list[Segment], list[tuple[Item, str]]]:
    """Run the segmenter on `items` with the given dynamic-alpha config."""
    machine = ContextMachine(alpha_fn=alpha_fn, alpha_k=alpha_k)
    trace: list[tuple[Item, str]] = []
    for item in items:
        trace.append((item, machine.push(item)))
    machine.cleanup_pass()
    return machine.segments, trace


def summary_line(segments: list[Segment], trace: list[tuple[Item, str]]) -> str:
    action_counts: dict[str, int] = {}
    for _, act in trace:
        action_counts[act] = action_counts.get(act, 0) + 1
    reopens = sum(1 for s in segments if s.reopened_from is not None)
    parts = [f"segs={len(segments)}", f"reopens={reopens}"]
    for k in ("new", "append", "soft", "reopen", "agent", "op"):
        if action_counts.get(k, 0):
            parts.append(f"{k}={action_counts[k]}")
    return "  ".join(parts)


def alpha_configs() -> list[tuple[str, float]]:
    """Return the run matrix: all (fn, k) pairs from DEFAULT_K_PER_FN."""
    out: list[tuple[str, float]] = []
    for fn, ks in DEFAULT_K_PER_FN.items():
        for k in ks:
            out.append((fn, float(k)))
    return out


def matrix_row(
    model_name: str,
    fn_name: str,
    alpha_k: float,
    segments: list[Segment],
    trace: list[tuple[Item, str]]) -> str:
    reopens = sum(1 for s in segments if s.reopened_from is not None)
    action_counts: dict[str, int] = {}
    for _, act in trace:
        action_counts[act] = action_counts.get(act, 0) + 1
    return (
        f"{model_name:<32} {fn_name:<3} k={alpha_k:<4} "
        f"segs={len(segments):>2} reopens={reopens:>2} "
        f"appends={action_counts.get('append', 0):>2} "
        f"softs={action_counts.get('soft', 0):>2} "
        f"agent={action_counts.get('agent', 0):>2} "
        f"op={action_counts.get('op', 0):>2}"
    )


def main(argv: list[str]) -> int:
    if len(argv) < 2:
        print("usage: python poc_v2.py interactions.jsonl", file=sys.stderr)
        print("       POC_MODELS=m1,m2 python poc_v2.py interactions.jsonl", file=sys.stderr)
        return 2
    path = Path(argv[1])
    if not path.exists():
        print(f"file not found: {path}", file=sys.stderr)
        return 2

    models = os.environ.get("POC_MODELS", "all-mpnet-base-v2").split(",")
    models = [m.strip() for m in models if m.strip()]
    configs = alpha_configs()

    print(f"loading interactions from {path} ...")
    records = parse_records(path)
    print(
        f"parsed {len(records)} record(s); "
        f"{len(models)} model(s) × {len(configs)} alpha(fn,k) pair(s) "
        f"= {len(models) * len(configs)} runs"
    )
    print(
        "alpha configurations: " +
        ", ".join(f"{fn}@k={k}" for fn, k in configs)
    )
    print()

    results: list[tuple[str, str, float, list[Segment], list[tuple[Item, str]]]] = []
    for model_name in models:
        print(f"--- embedding model: {model_name} ---")
        items = embed_records(records, model_name)
        for fn_name, k in configs:
            segments, trace = run_one(items, fn_name, k)
            results.append((model_name, fn_name, k, segments, trace))

    print()
    header = (
        f"{'model':<32} {'fn':<3} {'k':<6} {'segs':>4} {'reopens':>8} "
        f"{'appends':>8} {'softs':>6} {'agent':>6} {'op':>4}"
    )
    print(header)
    print("-" * len(header))
    for model_name, fn_name, k, segments, trace in results:
        print(matrix_row(model_name, fn_name, k, segments, trace))
    print()

    for model_name, fn_name, k, segments, trace in results:
        print(
            f"################ model={model_name} | fn={fn_name} | k={k}  "
            f"({summary_line(segments, trace)}) ################"
        )
        print_segments(segments, trace)
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv))
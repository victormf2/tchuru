"""Semantic context switcher — POC.

Reads a JSONL file of fake interactions, runs each through `push_context`,
then prints the resulting segments. See pocplan.md for the full design.

Usage:
    python poc.py interactions.jsonl
    POC_DEBUG=1 python poc.py interactions.jsonl   # per-item decision log
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
REOPEN_AGE_HOURS = 4
REOPEN_LOOKBACK = 20
MIN_SEGMENT_SIZE_FOR_REOPEN = 3
TINY_SEGMENT_SIZE = 2
TINY_ABSORB_SIM = LOW
CENTROID_DRIFT = 0.9

OPERATIONAL_SOURCES = frozenset({"db", "vscode", "terminal", "build"})


def _env_float(name: str, default: float) -> float:
    raw = os.environ.get(name)
    if raw is None:
        return default
    return float(raw)


HIGH = _env_float("POC_HIGH", HIGH)
LOW = _env_float("POC_LOW", LOW)
MIN_SEGMENT_SIZE_FOR_REOPEN = int(_env_float("POC_MIN_SEG", MIN_SEGMENT_SIZE_FOR_REOPEN))


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
        if len(s) > 80:
            return s[:77] + "..."
        return s

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
    ended_at: Optional[datetime]
    items: list[Item] = field(default_factory=list)
    centroid: Optional[np.ndarray] = None
    soft_boundaries: list[tuple[int, float]] = field(default_factory=list)
    reopened_from: Optional[int] = None

    @property
    def is_open(self) -> bool:
        return self.ended_at is None


_model: Optional[SentenceTransformer] = None


def get_model() -> SentenceTransformer:
    global _model
    if _model is None:
        name = os.environ.get("POC_MODEL", "all-mpnet-base-v2")
        _model = SentenceTransformer(name)
    return _model


def embed(text: str) -> np.ndarray:
    return get_model().encode(text, normalize_embeddings=True)


def l2_normalize(v: np.ndarray) -> np.ndarray:
    n = float(np.linalg.norm(v))
    if n == 0.0:
        return v
    return v / n


def load_interactions(path: Path) -> list[Item]:
    items: list[Item] = []
    for i, raw in enumerate(path.read_text().splitlines()):
        line = raw.strip()
        if not line or line.startswith("#"):
            continue
        d = json.loads(line)
        items.append(
            Item(
                id=i,
                ts=datetime.fromisoformat(d["ts"]),
                source=d.get("source", "unknown"),
                role=d.get("role", "user"),
                text=d["text"],
                emb=embed(d["text"]),
                request_id=d.get("request_id"),
            )
        )
    items.sort(key=lambda it: it.ts)
    for i, it in enumerate(items):
        it.id = i
    return items


def _open_segment(segments: list[Segment], item: Item) -> Segment:
    seg = Segment(
        id=len(segments) + 1,
        started_at=item.ts,
        ended_at=None,
        centroid=item.emb.copy(),
    )
    seg.items.append(item)
    segments.append(seg)
    return seg


def _close(seg: Segment, ts: datetime) -> None:
    if seg.ended_at is None:
        seg.ended_at = ts


def _append(seg: Segment, item: Item, sim: float, soft: bool) -> None:
    seg.items.append(item)
    stack = np.stack([it.emb for it in seg.items])
    seg.centroid = l2_normalize(stack.mean(axis=0))
    if soft:
        seg.soft_boundaries.append((item.id, sim))
    if seg.ended_at is not None:
        seg.ended_at = None


def _reopen(seg: Segment, current: Segment, current_sim: float) -> bool:
    """Reopen a closed segment if it uniquely matches better than current."""
    if not seg.is_open and seg.ended_at is not None:
        if seg.centroid is None or current.centroid is None:
            return False
        seg_sim = float(np.dot(seg.centroid, current.items[-1].emb))
        if seg_sim >= HIGH and seg_sim > current_sim + 0.02:
            seg.ended_at = None
            seg.reopened_from = seg.id
            return True
    return False


def _find_segment_for_item(segments: list[Segment], item_id: int) -> Optional[Segment]:
    """Return the segment that currently contains the item with the given id, if any."""
    for seg in segments:
        for it in seg.items:
            if it.id == item_id:
                return seg
    return None


def push_context(segments: list[Segment], item: Item) -> str:
    """Route `item` into one of the existing segments or open a new one.

    Returns a one-word label describing the action: 'new', 'append',
    'soft', 'reopen', 'agent', 'op'.
    """
    if item.is_agent and item.request_id is not None:
        target = _find_segment_for_item(segments, item.request_id)
        if target is not None:
            if DEBUG:
                print(
                    f"[item {item.id}] agent reply to request_id={item.request_id} "
                    f"-> append to seg #{target.id}",
                    file=sys.stderr,
                )
            _append(target, item, sim=1.0, soft=False)
            return "agent"
        if DEBUG:
            print(
                f"[item {item.id}] agent reply to request_id={item.request_id} "
                f"but no segment contains that id; falling through to prose logic",
                file=sys.stderr,
            )

    if not segments:
        if DEBUG:
            print(f"[item {item.id}] no segments -> open new", file=sys.stderr)
        _open_segment(segments, item)
        return "new"

    if item.is_operational:
        current = segments[-1]
        if DEBUG:
            print(
                f"[item {item.id}] operational (source={item.source}) "
                f"-> append to current seg #{current.id}",
                file=sys.stderr,
            )
        _append(current, item, sim=1.0, soft=False)
        return "op"

    current = segments[-1]
    sim = float(np.dot(item.emb, current.centroid))

    if sim >= HIGH:
        if DEBUG:
            print(
                f"[item {item.id}] sim={sim:.3f} >= HIGH={HIGH:.2f} vs "
                f"current #{current.id} -> append",
                file=sys.stderr,
            )
        _append(current, item, sim, soft=False)
        return "append"

    if sim >= LOW:
        if DEBUG:
            print(
                f"[item {item.id}] sim={sim:.3f} in [LOW={LOW:.2f}, HIGH={HIGH:.2f}) "
                f"vs current #{current.id} -> soft",
                file=sys.stderr,
            )
        _append(current, item, sim, soft=True)
        return "soft"

    item_ts = item.ts
    cutoff = item_ts - timedelta(hours=REOPEN_AGE_HOURS)
    candidates = [s for s in segments[:-1] if s.ended_at is not None and s.ended_at >= cutoff]
    candidates.reverse()
    candidates = candidates[:REOPEN_LOOKBACK]

    if DEBUG:
        print(
            f"[item {item.id}] sim={sim:.3f} < LOW={LOW:.2f} vs current #{current.id}; "
            f"checking {len(candidates)} reopen candidate(s) (window={REOPEN_AGE_HOURS}h, "
            f"cutoff={cutoff.isoformat(timespec='seconds')}):",
            file=sys.stderr,
        )

    best_old: Optional[Segment] = None
    best_old_sim = -1.0
    for old in candidates:
        if len(old.items) < MIN_SEGMENT_SIZE_FOR_REOPEN:
            if DEBUG:
                print(
                    f"    skip seg #{old.id} (size={len(old.items)} < "
                    f"MIN_SEGMENT_SIZE_FOR_REOPEN={MIN_SEGMENT_SIZE_FOR_REOPEN})",
                    file=sys.stderr,
                )
            continue
        old_sim = float(np.dot(item.emb, old.centroid))
        if DEBUG:
            ended_at = old.ended_at
            ended_str = ended_at.isoformat(timespec="seconds") if ended_at is not None else "?"
            print(
                f"    seg #{old.id} (ended={ended_str}, "
                f"size={len(old.items)}): sim={old_sim:.3f}",
                file=sys.stderr,
            )
        if old_sim >= HIGH and old_sim > best_old_sim:
            best_old = old
            best_old_sim = old_sim

    if best_old is not None and best_old_sim > sim + 0.02:
        if DEBUG:
            print(
                f"    -> reopen seg #{best_old.id} (sim={best_old_sim:.3f} > "
                f"current_sim+0.02={sim + 0.02:.3f})",
                file=sys.stderr,
            )
        _close(current, item_ts)
        _reopen(best_old, current, sim)
        if best_old.reopened_from is None:
            best_old.reopened_from = best_old.id
        _append(best_old, item, sim, soft=False)
        return "reopen"

    if DEBUG:
        if best_old is None:
            print(
                f"    -> no candidate >= HIGH={HIGH:.2f}; opening new segment",
                file=sys.stderr,
            )
        else:
            print(
                f"    -> best old seg #{best_old.id} sim={best_old_sim:.3f} did not "
                f"beat current_sim+0.02={sim + 0.02:.3f}; opening new segment",
                file=sys.stderr,
            )

    _close(current, item_ts)
    _open_segment(segments, item)
    return "new"


def cleanup_pass(segments: list[Segment]) -> None:
    """Absorb tiny segments into a similar predecessor. Bounded to one hop."""
    i = 1
    while i < len(segments):
        seg = segments[i]
        if len(seg.items) > TINY_SEGMENT_SIZE:
            i += 1
            continue
        prev = segments[i - 1]
        if prev.centroid is None or seg.centroid is None:
            i += 1
            continue
        sim = float(np.dot(prev.centroid, seg.centroid))
        if sim >= TINY_ABSORB_SIM:
            prev.items.extend(seg.items)
            if prev.ended_at is None or (seg.ended_at is not None and seg.ended_at > prev.ended_at):
                prev.ended_at = seg.ended_at
            stack = np.stack([it.emb for it in prev.items])
            prev.centroid = l2_normalize(stack.mean(axis=0))
            prev.soft_boundaries.extend(seg.soft_boundaries)
            segments.pop(i)
        else:
            i += 1


def _fmt_ts(ts: datetime) -> str:
    return ts.strftime("%H:%M:%S")


def print_segments(segments: list[Segment], trace: list[tuple[Item, str]]) -> None:
    print("=" * 72)
    print(f"  {len(segments)} segment(s), {sum(len(s.items) for s in segments)} item(s) total")
    print("=" * 72)
    print()

    action_icons = {
        "new": "+",
        "append": ">",
        "soft": "~",
        "reopen": "<",
        "agent": "^",
        "op": "=",
    }

    for seg in segments:
        started = _fmt_ts(seg.started_at)
        if seg.ended_at is not None:
            ended = _fmt_ts(seg.ended_at)
            range_ = f"({started} → {ended})"
        else:
            range_ = f"({started} → open)"

        header = f"=== Segment {seg.id} {range_} — {len(seg.items)} item(s)"
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
                print(f"    (soft boundary at item {soft_id} \"{soft_item.truncated_text}\": sim={soft_sim:.3f})")

        print()


def main(argv: list[str]) -> int:
    if len(argv) < 2:
        print("usage: python poc.py interactions.jsonl", file=sys.stderr)
        return 2

    path = Path(argv[1])
    if not path.exists():
        print(f"file not found: {path}", file=sys.stderr)
        return 2

    print(f"loading interactions from {path} ...")
    items = load_interactions(path)
    print(f"loaded {len(items)} item(s); embedding model ready.\n")

    segments: list[Segment] = []
    trace: list[tuple[Item, str]] = []

    for item in items:
        action = push_context(segments, item)
        trace.append((item, action))

    cleanup_pass(segments)

    print_segments(segments, trace)
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv))

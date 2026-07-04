# POC Plan — Semantic Context Switcher

## Goal
Build a small script that:
1. Reads a file of fake user/agent interactions with fake timestamps.
2. For each interaction, calls a `push_context` function that decides — via embedding similarity to a running "centroid" — whether the item joins the current segment, soft-joins, starts a new segment, or reopens a recent closed segment.
3. At the end, prints every segment in order, each with its assigned interactions.

This is a **logic-first POC**. No real apps, no real transport, no real LLM calls. Embeddings are real (a small local model). Persistence is in-memory. The point is to **see the segmenter behave correctly** on a hand-crafted trace before we wire anything else.

## Scope

In scope:
- Embedding model loaded once (CPU, local).
- In-memory representation of items and segments.
- The `push_context` decision function (append / soft-append / new / reopen).
- Segment cleanup pass (absorb tiny segments into a similar predecessor).
- A fake-interaction file format and a loader.
- A printer that renders the resulting segment timeline.

Out of scope (deliberately deferred):
- Unix domain socket transport.
- SQLite persistence.
- Real LLM-generated segment summaries.
- AFK / window monitoring, browser/editor extensions.
- Multi-user, auth, sync.
- Performance work — the trace will be tens of interactions, not millions.

## Inputs

### Fake interaction file format
A simple JSONL file (one JSON object per line). JSONL is chosen because it streams, is hand-editable, and lines can be commented out trivially.

Fields per interaction:
- `ts` (string, ISO-8601) — fake timestamp. The script will sort by this.
- `source` (string) — e.g. `"vscode"`, `"slack"`, `"browser"`, `"db"`, `"chat"`. Cosmetic for the printer; the embedder only sees the `text`.
- `text` (string) — the searchable surface. Keep each under ~1KB per the embedding design. For "long" cases (a webpage), pre-summarize in the file itself (e.g. paste the summary you want embedded, not the raw HTML).
- `role` (string, optional) — `"user"` or `"agent"`. Not used by the segmenter in v1; kept for forward-compatibility (we'll eventually want to know which items were the AI's responses vs human pushes). Printer can show this as a label.

Example file (`interactions.jsonl`):
```jsonl
{"ts": "2026-07-03T09:00:00", "source": "vscode",   "text": "PaymentProcessor.charge() throws on null amount", "role": "user"}
{"ts": "2026-07-03T09:00:30", "source": "chat",     "text": "fix the null-pointer in checkout", "role": "user"}
{"ts": "2026-07-03T09:05:00", "source": "slack",    "text": "Stripe 402 from billing endpoint, customer X", "role": "user"}
{"ts": "2026-07-03T09:12:00", "source": "db",       "text": "SELECT * FROM payments WHERE status='failed' LIMIT 20", "role": "user"}
{"ts": "2026-07-03T10:30:00", "source": "browser",  "text": "Sales call notes with Acme, Q3 forecast", "role": "user"}
{"ts": "2026-07-03T10:45:00", "source": "chat",     "text": "draft my weekly update", "role": "user"}
{"ts": "2026-07-03T11:20:00", "source": "vscode",   "text": "PaymentProcessor.charge() — back to the null amount bug", "role": "user"}
{"ts": "2026-07-03T11:21:00", "source": "slack",    "text": "Stripe 402 from billing endpoint, customer X — same as before", "role": "user"}
```

The first four items should land in **one segment** (the payment bug).
Items 5–6 should start a **second segment** (sales / weekly update).
Items 7–8 should **reopen the first segment** (returning to the same payment bug).
This is the canonical test trace. The script should be evaluated against it.

## Output

Printed to stdout after all interactions have been processed:

```
=== Segment 1 (09:00:00 → 11:19:59) — 4 items ===
  [09:00:00] user   vscode   "PaymentProcessor.charge() throws on null amount"
  [09:00:30] user   chat     "fix the null-pointer in checkout"
  [09:05:00] user   slack    "Stripe 402 from billing endpoint, customer X"
  [09:12:00] user   db       "SELECT * FROM payments WHERE status='failed' LIMIT 20"
  (soft boundary before last item: 0.62)

=== Segment 2 (10:30:00 → 10:46:00) — 2 items ===
  ...

=== Segment 3 (11:20:00 → …) — 2 items [REOPENED from #1] ===
  ...
```

Each line shows: timestamp, role, source, text. Each segment header shows the time range, item count, and either `REOPENED from #N` (if the segment was un-closed by a later match) or nothing.

## Implementation

Single script: `backend/poc.py`. No package, no entry point, just `python poc.py interactions.jsonl`.

### Dependencies (assumed installed)
- `sentence-transformers` — for `all-MiniLM-L6-v2` (384-dim, ~50MB model, CPU).
- `numpy` — for the actual cosine math.
- Standard library only for everything else: `json`, `dataclasses`, `datetime`, `pathlib`.

### Data model (in-memory only)

```python
@dataclass
class Item:
    id: int
    ts: datetime
    source: str
    role: str
    text: str
    emb: np.ndarray           # shape (384,), L2-normalized

@dataclass
class Segment:
    id: int
    started_at: datetime
    ended_at: Optional[datetime]   # None = open or reopened
    items: list[Item]
    centroid: np.ndarray           # running average, L2-normalized
    reopened_from: Optional[int]   # segment id, if this segment was un-closed
```

### Decision function — `push_context(item: Item)`

Constants (tunable, defaults given):
- `HIGH = 0.78` — same topic, append normally.
- `LOW = 0.55` — soft boundary, append but mark.
- `REOPEN_AGE_HOURS = 4` — don't reopen a segment older than this.
- `REOPEN_LOOKBACK = 20` — only consider the last N closed segments.
- `MIN_SEGMENT_SIZE_FOR_REOPEN = 3` — don't reopen a segment that itself had ≤ this many items (probably noise).
- `TINY_SEGMENT_SIZE = 2` — segments this small are candidates for absorption in cleanup.
- `TINY_ABSORB_SIM = LOW` — threshold for absorbing a tiny segment into its predecessor.

Algorithm (sketch, will be fleshed out in code):

```
current = segments[-1]  # the open one, if any
emb = embed(item.text)

if current is None:
    open_new_segment(item)
    return

sim = float(np.dot(emb, current.centroid))   # both L2-normalized

if sim >= HIGH:
    append(current, item, sim, soft=False)
elif sim >= LOW:
    append(current, item, sim, soft=True)
else:
    # try to reopen a recent closed segment
    for old in reversed(recently_closed(limit=REOPEN_LOOKBACK)):
        if now - old.ended_at > REOPEN_AGE_HOURS: break
        if len(old.items) < MIN_SEGMENT_SIZE_FOR_REOPEN: continue
        old_sim = float(np.dot(emb, old.centroid))
        if old_sim >= HIGH:
            # only reopen if there's a unique best match
            if unique_best(old, current, old_sim):
                reopen(old)
                append(old, item, sim, soft=False)
                return
    # no match — start a new segment
    close(current)
    open_new_segment(item)
```

`append` updates the centroid:
```
centroid = normalize(0.9 * centroid + 0.1 * emb)   # slow drift
```

The 0.9/0.1 weighting means a segment's centroid is dominated by its early items, which is the right bias: the topic is defined by what it *was* when it started, with later items as gentle nudges. Easier to detect a true return this way.

### Cleanup pass — `cleanup_pass(segments)`

Run once, after all interactions are processed. Iterates forward, looks for tiny segments whose predecessor is similar (above `TINY_ABSORB_SIM`), and folds them in. Bounded: never absorbs across more than one boundary, never re-opens anything.

```
i = 1
while i < len(segments):
    seg = segments[i]
    if len(seg.items) > TINY_SEGMENT_SIZE:
        i += 1
        continue
    prev = segments[i-1]
    sim = float(np.dot(seg.centroid, prev.centroid))
    if sim >= TINY_ABSORB_SIM:
        prev.items.extend(seg.items)
        prev.centroid = recompute_centroid(prev.items)   # full recompute, cheap at this scale
        segments.pop(i)
        # don't increment i — re-check the (now) current segment
    else:
        i += 1
```

### Embedding model

Loaded once at script start, kept in memory:
```python
from sentence_transformers import SentenceTransformer
model = SentenceTransformer("all-MiniLM-L6-v2")

def embed(text: str) -> np.ndarray:
    return model.encode(text, normalize_embeddings=True)
```

`normalize_embeddings=True` makes `np.dot` equal cosine similarity. No length normalization step needed in the hot path.

### Loader

```python
def load_interactions(path: Path) -> list[Item]:
    items = []
    for i, line in enumerate(path.read_text().splitlines()):
        line = line.strip()
        if not line or line.startswith("#"):
            continue
        d = json.loads(line)
        items.append(Item(
            id=i,
            ts=datetime.fromisoformat(d["ts"]),
            source=d.get("source", "unknown"),
            role=d.get("role", "user"),
            text=d["text"],
            emb=embed(d["text"]),
        ))
    items.sort(key=lambda it: it.ts)
    # re-number after sort
    for i, it in enumerate(items): it.id = i
    return items
```

Sort by timestamp, not file order, because real pushes arrive out of order and we want the script to behave like the real thing.

### Printer

Plain text, no colors, no tables. Reads well in a terminal and greps well in CI. Format already shown in the **Output** section above.

## Acceptance criteria

The POC is "done" when, run on the canonical test trace, the printed output shows:

1. Items 1–4 in one segment (the payment bug).
2. Items 5–6 in a second segment (sales / weekly update), with item 5 marked `soft boundary` against segment 1 (it'll be borderline-similar — that's the point of having two thresholds).
3. Items 7–8 in a third segment that's explicitly labeled `REOPENED from #1` (the centroid of the original payment-bug segment should match the new code item strongly enough to trigger un-close).
4. Item counts and time ranges add up (no item in two segments, no item lost).

Additional manual checks, not strict pass/fail:
- Adding a wildly unrelated item (e.g. `"schedule lunch with Alex"`) mid-trace starts a new segment.
- Adding a near-duplicate of an existing item is appended, not new.
- The cleanup pass collapses any 1-item "segments" that appear because of a single off-topic push and then a return.

## File layout

```
backend/
  pocplan.md          # this file
  poc.py              # the script
  interactions.jsonl  # the canonical test trace
  README.md           # how to run: `python poc.py interactions.jsonl`
```

## Next steps (not part of this POC)

Documented for context, not to be implemented here:
- Swap in-memory state for SQLite (WAL).
- Wrap the decision function behind a Unix domain socket.
- Add a tiny LLM-based summarizer that runs on segment close.
- Write the first client SDK (CLI that POSTs to the socket, simulating one app).

# Semantic Context Switcher — POC

A small script that reads fake user/agent interactions from a JSONL file,
routes each one through a `push_context` decision function, and prints the
resulting segments.

This is a **logic-first POC**. No real apps, no real transport, no LLM
calls. The only real model is the local sentence embedder
(`all-MiniLM-L6-v2` from `sentence-transformers`). Persistence is in-memory.

## Run

```
uv run python poc.py interactions.jsonl
```

Or with a plain virtualenv:

```
python poc.py interactions.jsonl
```

First run downloads the embedding model (~50 MB) into the standard
Hugging Face cache. Subsequent runs are fast.

## Input format

JSONL, one interaction per line. Lines starting with `#` are ignored.

| field    | type   | required | notes                                            |
|----------|--------|----------|--------------------------------------------------|
| `ts`     | string | yes      | ISO-8601 timestamp. The script sorts by this.    |
| `text`   | string | yes      | The searchable surface. Keep under ~1 KB.         |
| `source` | string | no       | e.g. `vscode`, `slack`, `browser`, `db`, `chat`. |
| `role`   | string | no       | `user` or `agent`. Default `user`.               |

## What it does

For each item, `push_context` decides one of four actions:

- **append** — high similarity to the current segment centroid.
- **soft** — mid similarity. Item joins the segment, marked as a soft
  boundary.
- **reopen** — low similarity to current, but high similarity to a recent
  closed segment. The old segment is un-closed and the item joins it.
- **new** — none of the above. A new segment is opened.

After all items are processed, a single cleanup pass absorbs any
1- or 2-item "segments" into a similar predecessor.

The output prints every segment, its items, and any soft-boundary
annotations.

## Tuning knobs

All at the top of `poc.py`:

| constant                        | default | meaning                                        |
|---------------------------------|---------|------------------------------------------------|
| `HIGH`                          | 0.78    | Above this is "same topic".                    |
| `LOW`                           | 0.55    | Above this is "soft boundary"; below is new.   |
| `REOPEN_AGE_HOURS`              | 4       | Don't reopen segments older than this.        |
| `REOPEN_LOOKBACK`               | 20      | Only check the last N closed segments.         |
| `MIN_SEGMENT_SIZE_FOR_REOPEN`   | 3       | Don't reopen a segment that itself was tiny.   |
| `TINY_SEGMENT_SIZE`             | 2       | Segments this small get cleanup-absorbed.      |
| `CENTROID_DRIFT`                | 0.9     | Weight of old centroid vs new item (slow).     |

## See also

`pocplan.md` for the full design rationale.

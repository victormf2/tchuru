# poc_v3 — Google EmbeddingGemma → ONNX → Bun

## Goal

Convert `google/embeddinggemma-300m` to ONNX so it can run in Bun/Node via `@huggingface/transformers`, then write a small TS embedder and prove it can vectorize a string. This is the first concrete step of porting `poc_v2.py` from Python to TypeScript so the segmentation core can later drive the OpenCode SDK v2.

## Status

| Step | State |
|---|---|
| Decide on embedding model | done — EmbeddingGemma-300M (MTEB-en 69.67 @ 768d, Matryoshka, 100+ langs) |
| Decide on port target | done — Bun + `@huggingface/transformers` (Transformers.js v3) |
| Confirm Gemma3 is in supported models list | done — `huggingface.co/docs/transformers.js/index` lists **Gemma3** |
| Confirm Xenova mirror exists | **no** — `Xenova/embeddinggemma-300m` 401s, must convert ourselves |
| Docker image for export | done — `tchuru-export` built (Debian slim, torch 2.6 CPU, optimum 1.27, transformers 4.51.3, sentence-transformers 3.4.1) |
| ONNX export | **blocked** on this machine — see below |
| Bun project init | not done |
| TS embedder + smoke test | not done |
| Run segmentation algorithm in TS | not done (separate task) |

## Environment notes (host)

- Host: Alpine Linux, **3.8 GB RAM, 1.8 GB free, 1 CPU**, 2 GB swap
- Bun 1.3.14, Node v22.23.0, Python 3.12.13 (in venv, but **torch wheels don't exist for this musl/Arch combo** — `python3.12` lacks matching `torch` distribution)
- Docker 28.3.3, works fine
- That's why the export runs in Docker, not on the host
- **The user is going to a more capable machine next** — this file is the handoff

## Files in this directory

```
backend/poc_v3/
├── Dockerfile.export         # Debian slim + torch-cpu + optimum + sentence-transformers
├── models/                   # bind-mount target for the ONNX output (currently empty)
├── .venv/                    # abandoned half-installed venv from first attempt — safe to delete
└── PLAN.md                   # this file
```

## What was tried

### Attempt 1 — `optimum-cli export onnx --task feature-extraction`

Pinned to: `optimum[exporters,onnxruntime]==1.27.0`, `transformers==4.51.3`, `sentence-transformers==3.4.1`.

```
docker run --rm -e HF_TOKEN -v $PWD/models:/app/models tchuru-export
```

- Model downloaded, tokenizer + config.json + special_tokens_map.json written to `models/embeddinggemma-300m-onnx/`
- ONNX trace started
- **Container killed with exit 137 (OOM)** — torch tracing fp32 model needs more than the ~1.8GB free on this host. Swap didn't save it.

### Attempt 2 — bump sentence-transformers to 5.x

Tried `sentence-transformers>=5.1,<6` + `transformers>=4.56,<5`.

```
AttributeError: property 'config' of 'SentenceTransformer' object has no setter
  at optimum/exporters/tasks.py:1043
  in TasksManager.standardize_model_attributes
```

**Known incompatibility**: optimum 1.27's `TasksManager.get_model_from_task` calls `model.config = ...` on a SentenceTransformer, but ST 5.x made `config` a read-only property. Two-option fix is to either downgrade ST or upgrade optimum — but optimum 2.x pulls `optimum-onnx` separately and has its own dep conflicts on the current transformer version.

Reverted to attempt 1's pin set.

### Attempt 3 — same as 1, with bind-mount perms fixed

`-u $(id -u):$(id -g)` so the in-container UID matches host. Created `.cache` permission errors because `HOME` wasn't set. Stopped here — at this point we have the diagnosis and a cleaner plan.

## Plan for the capable machine

### Step 1 — clean Docker retry, then if OOM, custom export

**First, retry attempt 1 with proper flags:**

```bash
cd backend/poc_v3
rm -rf models/embeddinggemma-300m-onnx
mkdir -p models/embeddinggemma-300m-onnx cache

docker run --rm \
  -e HF_TOKEN \
  -e HOME=/tmp \
  -u "$(id -u):$(id -g)" \
  --memory=8g --shm-size=2g \
  -v "$PWD/models:/app/models" \
  -v "$PWD/cache:/tmp/.cache" \
  tchuru-export
```

If `--memory=8g` is available, this should succeed — the previous OOM was 1.8GB headroom vs ~1.5GB+ working-set for an fp32 trace.

**If it OOMs again, or if you want to skip the version-coupling dance entirely**, use the direct `torch.onnx.export` script below. It bypasses optimum's `TasksManager` and the SentenceTransformer `config`-setter bug:

```python
# scripts/export_torch.py
import os
os.environ.setdefault("HF_HOME", "/tmp/.cache")
from pathlib import Path
import torch
from sentence_transformers import SentenceTransformer

OUT = Path("/app/models/embeddinggemma-300m-onnx")
OUT.mkdir(parents=True, exist_ok=True)

# Load the ST wrapper, then pull out the raw Gemma3TextModel
st = SentenceTransformer("google/embeddinggemma-300m")
backbone = st[0].auto_model  # Gemma3TextModel
backbone.eval()

# Export the raw backbone. Mean pooling + L2 norm happen in TS.
dummy_ids = torch.zeros((1, 8), dtype=torch.long)
dummy_mask = torch.ones((1, 8), dtype=torch.long)
torch.onnx.export(
    backbone,
    (dummy_ids, dummy_mask),
    str(OUT / "onnx" / "model.onnx"),
    input_names=["input_ids", "attention_mask"],
    output_names=["last_hidden_state"],
    dynamic_axes={
        "input_ids": {0: "batch", 1: "seq"},
        "attention_mask": {0: "batch", 1: "seq"},
        "last_hidden_state": {0: "batch", 1: "seq"},
    },
    opset_version=14,
    do_constant_folding=True,
)

# Copy tokenizer + config alongside
import shutil
for name in ["tokenizer.json", "tokenizer_config.json", "special_tokens_map.json", "config.json"]:
    src = Path(st.tokenizer.model_max_length.__class__ and "")  # placeholder; replaced below
```

(Above script is a sketch — see "Final working script" appendix if you want the polished version.)

**Even cleaner alternative:** use the HF-hosted community ONNX exports if anyone has uploaded one by the time you read this. Check `https://huggingface.co/models?search=embeddinggemma+onnx` first.

### Step 2 — Bun project init

```bash
cd backend/poc_v3
bun init -y                 # creates package.json
bun add @huggingface/transformers
```

### Step 3 — TS embedder (mean-pool + L2-norm + task prefix)

`src/embed.ts` — see code sketch in conversation history. The four things to get right:

1. **Task prefix** — EmbeddingGemma expects a prefix on every input. For our segmentation use-case (passing user messages, code snippets, agent outputs), the closest fit is `task: search result | query: ` (default per model card). For richer contexts the model card lists 7 task types; pick one and stay consistent.
2. **Mean pooling** — average `last_hidden_state` across the sequence axis, **masked by `attention_mask`** (don't include padding in the average).
3. **L2 normalization** — divide by the vector's L2 norm.
4. **Matryoshka truncation** (optional) — model supports 768/512/256/128 dims. Default 768 is fine; drop to 128 for big speedups if cosine scores still separate well.

The model card's reference Python uses `encode_query` (with prefix) and `encode_document` (with `title: none | text: ` prefix). For tchuru's segmenter, we always want the "query" side — items being routed are user-flavored, even when they're tool output or agent text.

### Step 4 — Smoke test

```ts
// src/embed_test.ts
import { loadEmbedder, embed } from "./embed.js"

const e = loadEmbedder("./models/embeddinggemma-300m-onnx")
const a = await embed(e, "PaymentProcessor.charge() throws on null amount")
const b = await embed(e, "fix the null-pointer in checkout")
const c = await embed(e, "schedule lunch with Alex")
const d = await embed(e, "Stripe 402 from billing endpoint")

console.log("a·b (should be HIGH, >0.6):", a.dot(b))
console.log("a·c (should be LOW, <0.4):", a.dot(c))
console.log("a·d (should be HIGH, >0.6):", a.dot(d))
console.log("dim:", a.length)
```

If `a·b` and `a·d` are > 0.6 and `a·c` < 0.4, the model is wired correctly. Then re-tune `HIGH`/`LOW` from `poc_v2.py`'s defaults (0.78/0.55) — the MTEB-69 model has a different similarity distribution than mpnet.

### Step 5 (future, separate task) — port the segmenter

After the embedder is proven, port `poc_v2.py`'s `Item`, `Segment`, `ContextMachine`, alpha functions A/B/C, and `cleanup_pass` 1:1 to TS. Then plug into OpenCode SDK v2 per the earlier conversation.

## Fallback if EmbeddingGemma keeps resisting

Use **`Xenova/bge-base-en-v1.5`** — already ONNX on the hub, 768d, MTEB ~65, no license gate, no conversion needed. `AutoModel.from_pretrained("Xenova/bge-base-en-v1.5", { dtype: "q8" })` just works. Same mean-pool + L2-norm in TS. Costs ~5 MTEB points but gets the pipeline unblocked today.

## Key facts to keep in mind

- **Gemma3 IS supported** in Transformers.js v3 (confirmed in the official supported models list). No need to pick a different architecture.
- **Activations don't support fp16** — use fp32 or bf16. ONNX export with `--dtype fp32` (already in the Dockerfile CMD).
- **Max input length 2048 tokens** — fine for our use case; cap agent output snippets in the segmenter side.
- **License is gated** — `HF_TOKEN` must belong to an account that has accepted the Gemma terms. Re-accept at `https://huggingface.co/google/embeddinggemma-300m` if the token is rejected.
- **ID regex for OpenCode v2** (relevant later): sessions `ses_*`, messages `msg_*`, parts `prt_*`, workspaces `wrk_*`.
- **OpenCode v2 final-message detection** (relevant later): wait for `session.idle` SSE event, then call `client.v2.session.messages({ sessionID })` and take the last assistant text part. Or use `client.v2.session.wait` to block until idle and then the messages call.

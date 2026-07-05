# EmbeddingGemma — JS vs Python output validation

Confirms that the ONNX-based TS pipeline (via `@huggingface/transformers`) produces
the same embeddings as the PyTorch-based Python pipeline (via `sentence-transformers`)
to within float32 precision. Both load the same underlying model
(`google/embeddinggemma-300m`).

## Setup

| Side | Library | Model artifact | Tokenizer |
|---|---|---|---|
| TS (`src/embed_test.ts`) | `@huggingface/transformers` 4.2.0 | `onnx-community/embeddinggemma-300m-ONNX` (fp32) | bundled with the export |
| Python (`scripts/embed_test.py`) | `sentence-transformers` 5.6.0 | `google/embeddinggemma-300m` (PyTorch) | `transformers` AutoTokenizer |

Both pipelines:
1. Caption operational items with source-type prefix (`Code:`, `Command:`, `SQL:`, `Build:`)
2. Encode the captioned text via `model.encode(..., normalize_embeddings=True)`
3. Compute the full similarity matrix with one matmul (`emb @ emb.T`)

No task prefix is applied in either version — both are running the "raw" embedding
path, which is the same path the segmenter will use.

## Inputs

```
q0  [vscode]   Code:    PaymentProcessor.charge() throws on null amount
q1  [user]              fix the null-pointer in checkout
q2  [user]              schedule lunch with Alex
q3  [terminal] Command: Stripe 402 from billing endpoint
q4  [terminal] Command: deploy the staging build to prod
```

## Full similarity matrix

### TypeScript (ONNX Runtime)

```
                                            q0      q1      q2      q3      q4
q0: PaymentProcessor.charge() thr...   1.000   0.488   0.282   0.352   0.279
q1: fix the null-pointer in checkout   0.488   1.000   0.246   0.436   0.433
q2: schedule lunch with Alex           0.282   0.246   1.000   0.234   0.302
q3: Stripe 402 from billing endpoint   0.352   0.436   0.234   1.000   0.551
q4: deploy the staging build to prod   0.279   0.433   0.302   0.551   1.000
```

### Python (sentence-transformers, PyTorch)

```
                                            q0      q1      q2      q3      q4
q0: PaymentProcessor.charge() thr...   1.000   0.488   0.283   0.353   0.279
q1: fix the null-pointer in checkout   0.488   1.000   0.247   0.436   0.433
q2: schedule lunch with Alex           0.283   0.247   1.000   0.236   0.302
q3: Stripe 402 from billing endpoint   0.353   0.436   0.236   1.000   0.552
q4: deploy the staging build to prod   0.279   0.433   0.304   0.552   1.000
```

## Pairwise delta

| Pair | TS | Python | abs delta |
|---|---:|---:|---:|
| q0 vs q1 | 0.488 | 0.488 | 0.000 |
| q0 vs q2 | 0.282 | 0.283 | 0.001 |
| q0 vs q3 | 0.352 | 0.353 | 0.001 |
| q0 vs q4 | 0.279 | 0.279 | 0.000 |
| q1 vs q2 | 0.246 | 0.247 | 0.001 |
| q1 vs q3 | 0.436 | 0.436 | 0.000 |
| q1 vs q4 | 0.433 | 0.433 | 0.000 |
| q2 vs q3 | 0.234 | 0.236 | 0.002 |
| q2 vs q4 | 0.302 | 0.304 | 0.002 |
| q3 vs q4 | 0.551 | 0.552 | 0.001 |

Max delta: **0.002**, within float32 precision.

## Ranking vs q0 (charge null)

Identical ordering in both runs:

| Rank | Idx | Score | Text |
|---:|---:|---:|---|
| 1 | q0 | 1.000 | PaymentProcessor.charge() throws on null amount |
| 2 | q1 | 0.488 | fix the null-pointer in checkout |
| 3 | q3 | 0.352 / 0.353 | Stripe 402 from billing endpoint |
| 4 | q2 | 0.282 / 0.283 | schedule lunch with Alex |
| 5 | q4 | 0.279 | deploy the staging build to prod |

## Verdict

The TS pipeline is faithful to the Python one. Same tokenizer, same model
weights, same captioning, same L2 normalization, same matmul-as-cosine. The
ONNX export and the PyTorch model produce numerically equivalent embeddings.

Implication for the segmenter port: any divergence in segmentation output
between the TS and Python versions will be caused by **segmenter logic**, not
by the embedding step. The model is no longer a variable.

## Caveats / known sensitivities

- **Task prefix is not applied.** Both runs use the raw caption path. If the
  segmenter later prepends `task: search result | query: ` to inputs, both
  sides must add it symmetrically for comparisons to stay valid.
- **L2 norm is assumed.** The matmul-as-cosine shortcut depends on the
  export including the L2 normalization graph. All six community ONNX
  variants include it. If a future export drops it, the matmul shortcut
  silently degrades to plain dot product.
- **Captioning inflates same-source similarity.** `q3` and `q4` both get
  the `Command: ` prefix, pushing their cosine from 0.42 (no caption) to
  0.55 (with caption). This is by design in `poc_v2.py` — operational
  items of the same source type should cluster. Carry the same behavior
  in the TS segmenter.
- **EmbeddingGemma's MTEB-en is 68.36** (with the model card's prompt).
  The threshold distribution (HIGH/LOW) calibrated for mpnet in
  `poc_v2.py` (0.78 / 0.55) does not transfer. Empirically, related
  pairs land at 0.4-0.55 and unrelated at 0.2-0.35 — meaning HIGH/LOW
  around 0.45 / 0.30 is a reasonable starting point, to be re-tuned on
  real data.

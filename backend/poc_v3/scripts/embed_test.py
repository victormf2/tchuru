"""Python equivalent of src/embed_test.ts.

Loads the same EmbeddingGemma model via sentence-transformers (PyTorch) and
runs the same 5 captioned items through encode() to produce a similarity
matrix. Compare against the TS run to validate the model pipeline.

Note: this loads the ORIGINAL `google/embeddinggemma-300m` (PyTorch) rather
than the ONNX export. The weights are the same; only the runtime differs.
Expected: numbers should match the TS run to within float precision (~1e-4).
"""

from __future__ import annotations

import os
import numpy as np
from sentence_transformers import SentenceTransformer

os.environ.setdefault("HF_HUB_DISABLE_PROGRESS_BARS", "1")

OPERATIONAL_CAPTIONS = {
    "db": "SQL",
    "vscode": "Code",
    "terminal": "Command",
    "build": "Build",
}
OPERATIONAL_SOURCES = set(OPERATIONAL_CAPTIONS)


def caption_text(text: str, source: str | None) -> str:
    if not source:
        return text
    tag = OPERATIONAL_CAPTIONS.get(source)
    return f"{tag}: {text}" if tag else text


def main() -> int:
    if not os.environ.get("HF_TOKEN"):
        print("HF_TOKEN not set — model is gated, re-accept at", file=__import__("sys").stderr)
        print("https://huggingface.co/google/embeddinggemma-300m", file=__import__("sys").stderr)
        return 1

    print("Loading sentence-transformers model: google/embeddinggemma-300m")
    model = SentenceTransformer("google/embeddinggemma-300m")

    items = [
        ("vscode",   "PaymentProcessor.charge() throws on null amount"),
        ("user",     "fix the null-pointer in checkout"),
        ("user",     "schedule lunch with Alex"),
        ("terminal", "Stripe 402 from billing endpoint"),
        ("terminal", "deploy the staging build to prod"),
    ]

    print("\nCaptioning check:")
    captioned = []
    for source, text in items:
        c = caption_text(text, source)
        is_op = source in OPERATIONAL_SOURCES
        print(f"  [{source}]{' (op)' if is_op else ''}  ->  {c}")
        captioned.append(c)

    print("\nEncoding via model.encode(...)...")
    emb = model.encode(captioned, normalize_embeddings=True)
    print(f"embed returned ndarray: shape={emb.shape}, dtype={emb.dtype}")

    # L2-normalized embeddings: dot product == cosine similarity.
    sims = emb @ emb.T

    def short(s: str) -> str:
        return (s[:33] + "..." if len(s) > 36 else s).ljust(36)

    print("\nCosine matrix (matmul, L2-normalized):")
    header = " " * 38 + "".join(f"q{i}".rjust(8) for i in range(len(items)))
    print(header)
    for i, (src, txt) in enumerate(items):
        row = short(f"q{i}: {txt}")
        row += "".join(f"{sims[i, j]:.3f}".rjust(8) for j in range(len(items)))
        print(row)

    print("\nSpot checks (same as TS test):")
    print(f"  q0 vs q1 (billing-related):  {sims[0, 1]:.3f}")
    print(f"  q0 vs q2 (vs lunch):         {sims[0, 2]:.3f}")
    print(f"  q0 vs q3 (vs Stripe 402):    {sims[0, 3]:.3f}")

    print("\nRanking vs q0 (charge null):")
    ranking = sorted(enumerate(sims[0]), key=lambda x: -x[1])
    for idx, score in ranking:
        print(f"  q{idx}: {score:.3f}  {items[idx][1]}")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())

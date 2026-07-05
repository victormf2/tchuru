"""Download the community ONNX export of google/embeddinggemma-300m.

Run with:  uv run --group export python scripts/download_onnx.py

Source: onnx-community/embeddinggemma-300m-ONNX
  - fp32 graph:     onnx/model.onnx        (~480 KB)
  - fp32 weights:   onnx/model.onnx_data   (~1.2 GB)
  - tokenizer:      tokenizer.json, tokenizer_config.json,
                    special_tokens_map.json, added_tokens.json
  - config:         config.json, generation_config.json

The repo is a derivative of google/embeddinggemma-300m (Gemma license, gated).
The derivative itself is not gated, but HF_TOKEN must belong to an account
that has accepted Gemma terms at https://huggingface.co/google/embeddinggemma-300m.
"""

import os
import sys
from pathlib import Path

from huggingface_hub import snapshot_download

REPO_ID = "onnx-community/embeddinggemma-300m-ONNX"
TARGET = Path(__file__).resolve().parent.parent / "models" / "embeddinggemma-300m-onnx"


def main() -> int:
    if not os.environ.get("HF_TOKEN"):
        print("HF_TOKEN is not set. The Gemma license is gated — re-accept at", file=sys.stderr)
        print("https://huggingface.co/google/embeddinggemma-300m", file=sys.stderr)
        return 1

    TARGET.mkdir(parents=True, exist_ok=True)
    print(f"Downloading {REPO_ID} -> {TARGET}")

    path = snapshot_download(
        repo_id=REPO_ID,
        local_dir=str(TARGET),
        token=os.environ["HF_TOKEN"],
    )

    print(f"Done: {path}")
    for f in sorted(Path(path).rglob("*")):
        if f.is_file():
            size = f.stat().st_size
            print(f"  {f.relative_to(path)}  {size:>14,} bytes")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

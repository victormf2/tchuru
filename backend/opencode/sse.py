"""SSE parser that handles chunk boundaries (raw bytes → events)."""
import json
from typing import AsyncIterator


async def sse_events(stream: AsyncIterator[bytes]) -> AsyncIterator[dict]:
    """Parse a text/event-stream into dicts. Robust to chunk boundaries."""
    buf = b""
    async for chunk in stream:
        buf += chunk
        # events are separated by a blank line
        while b"\n\n" in buf:
            block, buf = buf.split(b"\n\n", 1)
            for line in block.split(b"\n"):
                line = line.strip()
                if not line or line.startswith(b":"):
                    continue
                if line.startswith(b"data:"):
                    payload = line[len(b"data:"):].lstrip()
                    try:
                        yield json.loads(payload)
                    except json.JSONDecodeError:
                        continue
    # flush trailing event without trailing blank line
    if buf.strip():
        for line in buf.split(b"\n"):
            line = line.strip()
            if line.startswith(b"data:"):
                payload = line[len(b"data:"):].lstrip()
                try:
                    yield json.loads(payload)
                except json.JSONDecodeError:
                    pass

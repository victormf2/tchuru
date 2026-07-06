"""Dump raw SSE bytes for 20s. No parsing. Just hex+ascii."""
import asyncio
import time

import httpx

T0 = time.monotonic()


def log(msg: str) -> None:
    print(f"[+{time.monotonic() - T0:6.2f}s] {msg}", flush=True)


async def main() -> None:
    async with httpx.AsyncClient(timeout=None) as http:
        req = http.build_request("GET", "http://127.0.0.1:8082/event")
        stream = await http.send(req, stream=True)
        log(f"subscribed: status={stream.status_code} ct={stream.headers.get('content-type')!r}")
        log(f"headers: {dict(stream.headers)}")

        buf = b""
        n = 0
        try:
            async with asyncio.timeout(20):
                async for chunk in stream.aiter_bytes():
                    log(f"  raw chunk ({len(chunk)}B): {chunk!r}")
                    n += 1
        except TimeoutError:
            log(f"done: {n} chunks")
        await stream.aclose()


if __name__ == "__main__":
    asyncio.run(main())

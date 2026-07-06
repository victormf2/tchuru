"""Dump every SSE event raw, no filtering. 90s."""
import asyncio
import json
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

        current: list[str] = []
        n = 0
        try:
            async with asyncio.timeout(90):
                async for raw in stream.aiter_lines():
                    if raw == "":
                        if current:
                            data = "\n".join(current)
                            current = []
                            if data.startswith("data: "):
                                payload = data[6:]
                                try:
                                    obj = json.loads(payload)
                                    n += 1
                                    t = obj.get("type", "?")
                                    p = obj.get("properties", {}) or {}
                                    sid = p.get("sessionID", "-")
                                    log(f"  #{n:3d} [{t}] sessionID={sid}")
                                except json.JSONDecodeError:
                                    log(f"  [parse-error] {payload[:80]!r}")
                            continue
                        continue
                    if raw.startswith(":"):
                        continue
                    if raw.startswith("data: "):
                        current.append(raw)
        except TimeoutError:
            log(f"done — got {n} events in 90s")
        await stream.aclose()


if __name__ == "__main__":
    asyncio.run(main())

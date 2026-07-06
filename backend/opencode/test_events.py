"""Minimal opencode client: SSE stream + create + prompt_async. Pure httpx."""
import asyncio
import json
import time
import typing
import httpx

BASE = "http://127.0.0.1:8082"
T0 = time.monotonic()


def log(m: str) -> None:
    print(f"[+{time.monotonic() - T0:6.2f}s] {m}", flush=True)


async def sse_events(http: httpx.AsyncClient) -> "typing.AsyncIterator[dict]":
    """Open /event, yield parsed SSE data dicts as they arrive."""
    async with http.stream("GET", f"{BASE}/event") as resp:
        if resp.status_code != 200:
            raise RuntimeError(f"subscribe failed: {resp.status_code}")
        log(f"subscribed status={resp.status_code}")
        buf = ""
        async for chunk in resp.aiter_text():
            buf += chunk
            while "\n\n" in buf:
                block, buf = buf.split("\n\n", 1)
                for line in block.split("\n"):
                    line = line.strip()
                    if line.startswith("data:"):
                        try:
                            yield json.loads(line[len("data:"):].strip())
                        except json.JSONDecodeError:
                            pass


async def create_session(http: httpx.AsyncClient, agent: str = "build") -> str:
    r = await http.post(f"{BASE}/session", json={"agent": agent})
    r.raise_for_status()
    return r.json()["id"]


async def send_prompt(http: httpx.AsyncClient, sid: str, text: str) -> None:
    body = {"parts": [{"type": "text", "text": text}]}
    r = await http.post(f"{BASE}/session/{sid}/prompt_async", json=body)
    log(f"prompt_async status={r.status_code}")
    r.raise_for_status()


async def run_turn(prompt_text: str = "say hi in one short sentence") -> None:
    async with httpx.AsyncClient(timeout=None) as http:
        idle = asyncio.Event()
        target: dict = {"sid": None}

        async def consume() -> None:
            async for evt in sse_events(http):
                t = evt.get("type", "?")
                props = evt.get("properties") or {}
                if props.get("sessionID") == target["sid"]:
                    log(f"  * {t}")
                    if t == "session.idle":
                        idle.set()
                        return
                elif t not in ("server.connected", "server.heartbeat"):
                    log(f"  . {t}")

        consumer = asyncio.create_task(consume())
        target["sid"] = await create_session(http)
        log(f"session={target['sid']}")
        await send_prompt(http, target["sid"], prompt_text)
        await idle.wait()
        consumer.cancel()
        log("done")


if __name__ == "__main__":
    import typing  # noqa: E402
    asyncio.run(run_turn())
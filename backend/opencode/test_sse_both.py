"""One script: create session, subscribe to BOTH v1 and v2 endpoints, fire prompt, report."""
import asyncio
import json
import time

import httpx

from opencode_sdk import ApiClient, Configuration
from opencode_sdk.api.session_api import SessionApi
from opencode_sdk.models.session_create_request import SessionCreateRequest
from opencode_sdk.models.session_prompt_async_request import SessionPromptAsyncRequest
from opencode_sdk.models.session_prompt_request_parts_inner import SessionPromptRequestPartsInner
from opencode_sdk.models.text_part_input import TextPartInput

T0 = time.monotonic()
DONE_V1 = asyncio.Event()
DONE_V2 = asyncio.Event()


def log(msg: str) -> None:
    print(f"[+{time.monotonic() - T0:6.2f}s] {msg}", flush=True)


async def drain(stream: httpx.Response, label: str, done: asyncio.Event) -> None:
    current: list[str] = []
    n = 0
    n_target = 0
    try:
        async for raw in stream.aiter_lines():
            if raw == "":
                if current:
                    data = "\n".join(current)
                    current = []
                    if data.startswith("data: "):
                        payload = data[6:]
                        try:
                            obj = json.loads(payload)
                        except json.JSONDecodeError:
                            continue
                        n += 1
                        t = obj.get("type", "?")
                        p = obj.get("properties", {}) or {}
                        sid = p.get("sessionID", "-")
                        if TARGET[0] and sid == TARGET[0]:
                            n_target += 1
                            log(f"  [{label}#{n:3d} target!] [{t}] {p}")
                            if t == "session.idle":
                                done.set()
                                return
                        elif t not in ("server.heartbeat", "server.connected"):
                            log(f"  [{label}#{n:3d}] [{t}] sid={sid} other")
                continue
            if raw.startswith(":"):
                continue
            if raw.startswith("data: "):
                current.append(raw)
    except asyncio.CancelledError:
        pass
    finally:
        log(f"[{label}] ended: {n} events, {n_target} for target")


TARGET: list[str] = [None]  # mutable container so drain can see updates


async def main() -> int:
    cfg = Configuration(host="http://127.0.0.1:8082")

    async with ApiClient(cfg) as client, httpx.AsyncClient(timeout=None) as http:
        # 1. subscribe to BOTH endpoints FIRST
        v1_req = http.build_request("GET", f"{cfg.host}/event")
        v1 = await http.send(v1_req, stream=True)
        log(f"v1 /event: status={v1.status_code}")
        v1_task = asyncio.create_task(drain(v1, "v1", DONE_V1))

        # 2. create session
        sessions = SessionApi(client)
        log("creating session ...")
        create = await sessions.session_create_with_http_info(
            session_create_request=SessionCreateRequest(),
        )
        sid = create.data.id
        TARGET[0] = sid
        log(f"target: {sid}")

        v2_req = http.build_request("GET", f"{cfg.host}/api/session/{sid}/event")
        v2 = await http.send(v2_req, stream=True)
        log(f"v2 /api/session/{sid}/event: status={v2.status_code} ct={v2.headers.get('content-type')!r}")
        if v2.status_code == 200:
            v2_task = asyncio.create_task(drain(v2, "v2", DONE_V2))
        else:
            log(f"v2 first 200B: {v2.read()[:200]!r}")
            v2_task = None

        # 3. send prompt
        await asyncio.sleep(0.3)
        log("sending prompt ...")
        part = SessionPromptRequestPartsInner(
            actual_instance=TextPartInput(type="text", text="say hello")
        )
        res = await sessions.session_prompt_async_with_http_info(
            session_id=sid,
            session_prompt_async_request=SessionPromptAsyncRequest(parts=[part]),
        )
        log(f"prompt status={res.status_code}")

        # 4. wait for idle on either
        try:
            await asyncio.wait(
                [DONE_V1.wait(), DONE_V2.wait()],
                timeout=60,
                return_when=asyncio.FIRST_COMPLETED,
            )
        except TimeoutError:
            log("60s timeout, no session.idle on either stream")

        v1_task.cancel()
        if v2_task:
            v2_task.cancel()
        await v1.aclose()
        if v2 and not v2.is_closed:
            await v2.aclose()
    return 0


if __name__ == "__main__":
    asyncio.run(main())

"""Mirror of backend/poc_v4/src/opencode.ts:runTurn — proper streaming, no timeout."""
import asyncio
import json
import time
from typing import cast, Any

import httpx

from opencode_sdk import ApiClient, Configuration
from opencode_sdk.api.session_api import SessionApi
from opencode_sdk.models.session_create_request import SessionCreateRequest
from opencode_sdk.models.session_prompt_async_request import SessionPromptAsyncRequest
from opencode_sdk.models.session_prompt_request_parts_inner import SessionPromptRequestPartsInner
from opencode_sdk.models.text_part_input import TextPartInput
from sse import sse_events

T0 = time.monotonic()


def log(msg: str) -> None:
    print(f"[+{time.monotonic() - T0:6.2f}s] {msg}", flush=True)


def event_belongs(evt: dict, session_id: str) -> bool:
    p = evt.get("properties") or {}
    return "sessionID" in p and p.get("sessionID") == session_id


def short(evt: dict) -> str:
    t = evt.get("type", "?")
    p = evt.get("properties") or {}
    extras: list[str] = []
    for k in (
        "sessionID", "messageID", "callID", "tool", "delta", "text",
        "agent", "model", "status", "permission", "id",
    ):
        v = p.get(k)
        if v is None:
            continue
        if isinstance(v, str) and len(v) > 60:
            v = v[:60] + "..."
        extras.append(f"{k}={v!r}")
    return f"[{t}] " + " ".join(extras[:3])


async def run_turn(directory: str, prompt_text: str) -> None:
    cfg = Configuration(host="http://127.0.0.1:8082")
    async with ApiClient(cfg) as client, httpx.AsyncClient(timeout=None) as http:
        # 1. subscribe FIRST
        log("subscribing to /event ...")
        req = http.build_request("GET", f"{cfg.host}/event")
        sse = await http.send(req, stream=True)
        if sse.status_code != 200:
            log(f"FAIL subscribe status={sse.status_code}")
            return
        log(f"subscribed: status={sse.status_code} ct={sse.headers.get('content-type')!r}")

        # 2. spawn consumer
        idle = asyncio.Event()
        collected: list[dict] = []

        async def consume() -> None:
            try:
                async for evt in sse_events(sse.aiter_bytes()):
                    t = evt.get("type", "?")
                    if event_belongs(evt, target[0]):
                        collected.append(evt)
                        log(f"  * [{t}] {short(evt)}")
                        if t == "session.idle":
                            idle.set()
                            return
                    elif t in ("server.connected", "server.heartbeat"):
                        pass
                    else:
                        sid = (evt.get("properties") or {}).get("sessionID", "-")
                        log(f"  . [{t}] sid={sid}")
            except asyncio.CancelledError:
                pass

        target: list[str | None] = [None]
        consumer = asyncio.create_task(consume())

        # 3. create session
        log(f"creating session in {directory!r}")
        create = await SessionApi(client).session_create_with_http_info(
            session_create_request=SessionCreateRequest(),
        )
        target[0] = create.data.id
        log(f"target: {target[0]}  dir={create.data.directory!r}")

        # 4. send prompt
        await asyncio.sleep(0.2)
        log("sending prompt ...")
        part = SessionPromptRequestPartsInner(
            actual_instance=TextPartInput(type="text", text=prompt_text)
        )
        res = await SessionApi(client).session_prompt_async_with_http_info(
            session_id=target[0],
            session_prompt_async_request=SessionPromptAsyncRequest(parts=[part]),
        )
        log(f"prompt status={res.status_code}")

        # 5. wait for idle (no artificial timeout)
        log("waiting for session.idle ...")
        await idle.wait()
        log(f"=== idle after {len(collected)} events ===")
        for evt in collected:
            log(f"   {short(evt)}")
        consumer.cancel()
        await sse.aclose()


if __name__ == "__main__":
    asyncio.run(run_turn(
        directory="/home/alpine/repos-sync/tchuru",
        prompt_text="say hello in one short sentence",
    ))

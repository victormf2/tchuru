"""Python port of backend/poc_v4/src/opencode.ts.

Uses backend/opencode_sdk.py for HTTP/SSE primitives.
"""
from __future__ import annotations

import asyncio
import json
import sys
from typing import Any, Literal, TypedDict, cast

from opencode_sdk import (
    create_opencode_client,
    OpencodeClient,
    OpencodeServer,
    Event,
    EventPermissionAsked,
    EventQuestionAsked,
    FilePartInput,
    PromptPart,
    Session,
    TextPartInput,
)

OpencodeHandle = tuple[OpencodeClient, OpencodeServer]


# ---------------------------------------------------------------------------
# Types
# ---------------------------------------------------------------------------

class AgentTurn(TypedDict):
    finalText: str
    events: list[Event]
    lastAssistantInfo: Any


class PermissionRequest(TypedDict):
    requestID: str
    permission: str
    patterns: list[str]


class QuestionOption(TypedDict):
    label: str
    description: str


class Question(TypedDict):
    question: str
    header: str
    options: list[QuestionOption]
    multiple: bool


class QuestionRequest(TypedDict):
    requestID: str
    questions: list[Question]


class TurnHandlers(TypedDict, total=False):
    onPermissionAsked: Any
    onQuestionAsked: Any


# ---------------------------------------------------------------------------
# Lifecycle
# ---------------------------------------------------------------------------

async def start_opencode(
    hostname: str = "127.0.0.1",
    port: int = 9876,
) -> OpencodeHandle:
    return await create_opencode_client(hostname=hostname, port=port)


async def create_session(
    client: OpencodeClient,
    opts: dict[str, Any] | None = None,
) -> Session:
    opts = opts or {}
    return await client.session.create(
        agent=opts.get("agent", "build"),
        directory=opts.get("directory"),
    )


# ---------------------------------------------------------------------------
# Prompt
# ---------------------------------------------------------------------------

async def send_prompt(
    client: OpencodeClient,
    session_id: str,
    parts: list[PromptPart],
) -> None:
    text_parts = [
        cast(TextPartInput, p) for p in parts if p.get("type") == "text"
    ]
    file_parts = [
        cast(FilePartInput, p) for p in parts if p.get("type") == "file"
    ]

    print(
        f"[oc] -> session={session_id} prompt parts ({len(parts)}):",
        file=sys.stderr,
    )
    for t in text_parts:
        one_line = t["text"].replace("\n", " ")
        print(f'  [text] "{preview(one_line, 200)}"', file=sys.stderr)
    for f in file_parts:
        print(
            f"  [file] name={f.get('filename', '?')}  uri={f['url']}  mime={f['mime']}",
            file=sys.stderr,
        )

    await client.session.prompt_async(session_id, parts)
    print(f"[oc] <- session={session_id} prompt accepted (204)", file=sys.stderr)


# ---------------------------------------------------------------------------
# Turn
# ---------------------------------------------------------------------------

async def _default_permission(
    _req: PermissionRequest,
) -> Literal["once", "always", "reject"]:
    return "once"


async def _default_question(req: QuestionRequest) -> list[list[str]]:
    return [
        [q["options"][0]["label"]] if q["options"] else [""]
        for q in req["questions"]
    ]


default_handlers: TurnHandlers = {
    "onPermissionAsked": _default_permission,
    "onQuestionAsked": _default_question,
}


async def run_turn(
    client: OpencodeClient,
    session_id: str,
    parts: list[PromptPart],
    handlers: TurnHandlers | None = None,
    on_event: Any | None = None,
) -> AgentTurn:
    handlers = handlers or default_handlers
    collected: list[Event] = []

    events_res = await client.event.subscribe()

    async def consume() -> None:
        try:
            async for event in events_res.stream:
                is_for_target = event_belongs_to_session(event, session_id)
                event_type = event.get("type", "")
                if event_type in ("permission.asked", "question.asked"):
                    await handle_auto_reply(client, event, handlers)
                log_event(event, is_for_target)
                if is_for_target:
                    collected.append(event)
                    if on_event is not None:
                        on_event(event)
                if event_type == "session.idle" and is_for_target:
                    break
        except Exception:
            # stream ended
            pass

    consumer = asyncio.create_task(consume())
    await send_prompt(client, session_id, parts)
    await consumer

    print(
        f"[oc] <- session={session_id} idle (events: {len(collected)})",
        file=sys.stderr,
    )

    final_text, last_assistant_info = await fetch_last_assistant_message(
        client, session_id
    )

    return {
        "finalText": final_text,
        "events": collected,
        "lastAssistantInfo": last_assistant_info,
    }


# ---------------------------------------------------------------------------
# Auto replies
# ---------------------------------------------------------------------------

async def handle_auto_reply(
    client: OpencodeClient,
    event: Event,
    handlers: TurnHandlers,
) -> None:
    event_type = event.get("type", "")
    if event_type == "permission.asked":
        await handle_permission(client, event, handlers)
        return
    if event_type == "question.asked":
        await handle_question(client, event, handlers)
        return


async def handle_permission(
    client: OpencodeClient,
    event: EventPermissionAsked,
    handlers: TurnHandlers,
) -> None:
    props = event["properties"]
    req_id = props["id"]
    cb = handlers.get("onPermissionAsked", _default_permission)
    reply = await cb({
        "requestID": req_id,
        "permission": props["permission"],
        "patterns": props["patterns"],
    })
    safe_reply = reply if reply is not None else "once"
    sid = props.get("sessionID", "")
    tag = "" if sid == "" else f" (subagent={sid[:12]}...)"
    print(
        f"[oc] auto-reply permission id={req_id} "
        f"tool={props['permission']} -> {safe_reply}{tag}",
        file=sys.stderr,
    )
    try:
        await client.permission.reply(req_id, safe_reply)
    except Exception as e:
        print(f"[oc] permission.reply error: {e}", file=sys.stderr)


async def handle_question(
    client: OpencodeClient,
    event: EventQuestionAsked,
    handlers: TurnHandlers,
) -> None:
    props = event["properties"]
    req_id = props["id"]
    cb = handlers.get("onQuestionAsked", _default_question)
    answers = await cb({
        "requestID": req_id,
        "questions": props["questions"],
    })
    safe_answers = (
        answers
        if answers is not None
        else [[""] for _ in props["questions"]]
    )
    sid = props.get("sessionID", "")
    tag = "" if sid == "" else f" (subagent={sid[:12]}...)"
    print(
        f"[oc] auto-reply question id={req_id} "
        f"({len(props['questions'])} q) -> {json.dumps(safe_answers)}{tag}",
        file=sys.stderr,
    )
    try:
        await client.question.reply(req_id, safe_answers)
    except Exception as e:
        print(f"[oc] question.reply error: {e}", file=sys.stderr)


# ---------------------------------------------------------------------------
# Messages
# ---------------------------------------------------------------------------

async def fetch_last_assistant_message(
    client: OpencodeClient,
    session_id: str,
) -> tuple[str, Any]:
    try:
        msgs = await client.session.messages(session_id)
    except Exception as e:
        print(f"[oc] fetch messages error: {e}", file=sys.stderr)
        return "", None

    for m in reversed(msgs):
        if m["info"]["role"] == "assistant":
            texts: list[str] = []
            for p in m["parts"]:
                if p.get("type") == "text":
                    texts.append(p["text"])
            return "".join(texts), m["info"]
    return "", None


# ---------------------------------------------------------------------------
# Logging helpers
# ---------------------------------------------------------------------------

def log_event(event: Event, is_for_target: bool) -> None:
    tag = "" if is_for_target else " [subagent]"
    event_type = event.get("type", "")
    props = event.get("properties", {})

    if event_type == "message.updated":
        print(
            f"[oc] event: message.updated{tag} "
            f"role={props['info']['role']} id={props['info']['id']}",
            file=sys.stderr,
        )
    elif event_type == "message.part.updated":
        part = props["part"]
        pid = part["id"]
        if part.get("type") == "text":
            print(
                f"[oc] event: message.part.updated{tag} "
                f"part=text id={pid} ({len(part.get('text', ''))} chars)",
                file=sys.stderr,
            )
        elif part.get("type") == "tool":
            state = part.get("state", {})
            input_str = json.dumps(state.get("input", {}))[:120]
            print(
                f"[oc] event: message.part.updated{tag} "
                f"part=tool id={pid} tool={part.get('tool')} "
                f"state={state.get('status')} input={input_str}",
                file=sys.stderr,
            )
        else:
            print(
                f"[oc] event: message.part.updated{tag} "
                f"part={part.get('type')} id={pid}",
                file=sys.stderr,
            )
    elif event_type == "message.part.delta":
        print(
            f"[oc] event: message.part.delta{tag} "
            f"+{len(props.get('delta', ''))} chars",
            file=sys.stderr,
        )
    elif event_type == "session.next.text.ended":
        print(
            f"[oc] event: text.ended{tag} "
            f"({len(props.get('text', ''))} chars)",
            file=sys.stderr,
        )
    elif event_type == "session.next.tool.called":
        print(
            f"[oc] event: tool.called{tag} "
            f"tool={props.get('tool')} callID={props.get('callID')} "
            f"input={json.dumps(props.get('input', {}))[:160]}",
            file=sys.stderr,
        )
    elif event_type == "session.next.tool.success":
        print(
            f"[oc] event: tool.success{tag} callID={props.get('callID')}",
            file=sys.stderr,
        )
    elif event_type == "session.next.tool.failed":
        print(
            f"[oc] event: tool.failed{tag} callID={props.get('callID')}",
            file=sys.stderr,
        )
    elif event_type == "session.idle":
        print(f"[oc] event: session.idle{tag}", file=sys.stderr)
    elif event_type == "session.error":
        print(
            f"[oc] event: session.error{tag} "
            f"{json.dumps(props.get('error', {}))[:200]}",
            file=sys.stderr,
        )
    elif event_type in ("permission.asked", "question.asked"):
        pass
    else:
        print(
            f"[oc] unhandled event: {event_type}{tag} "
            f"{json.dumps(props)[:200]}",
            file=sys.stderr,
        )


def event_belongs_to_session(event: Event, session_id: str) -> bool:
    props = event.get("properties", {})
    return "sessionID" in props and session_id == props["sessionID"]


def preview(s: str, n: int) -> str:
    return s if len(s) <= n else s[:n] + "..."


__all__ = [
    "start_opencode",
    "create_session",
    "send_prompt",
    "run_turn",
    "fetch_last_assistant_message",
    "log_event",
    "event_belongs_to_session",
    "preview",
    "OpencodeHandle",
    "AgentTurn",
    "TurnHandlers",
    "PermissionRequest",
    "QuestionRequest",
    "Question",
    "QuestionOption",
    "default_handlers",
    "Event",
    "EventPermissionAsked",
    "EventQuestionAsked",
    "TextPartInput",
    "FilePartInput",
    "PromptPart",
    "Session",
]

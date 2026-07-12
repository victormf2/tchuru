"""Minimal HTTP client for the OpenCode v1 API (httpx-only).

Mirrors the parts of `@opencode-ai/sdk/v2` used by `backend/poc_v4/src/opencode.ts`.
"""
from __future__ import annotations

import json
from typing import Any, AsyncIterator, Literal, NotRequired, TypedDict

import httpx

# ---------------------------------------------------------------------------
# Part types
# ---------------------------------------------------------------------------

class TextPartInput(TypedDict):
    type: Literal["text"]
    text: str


class FilePartInput(TypedDict):
    type: Literal["file"]
    url: str
    mime: str
    filename: NotRequired[str | None]


PromptPart = TextPartInput | FilePartInput


# ---------------------------------------------------------------------------
# Session / message types
# ---------------------------------------------------------------------------

class Session(TypedDict):
    id: str
    agent: NotRequired[str]
    directory: NotRequired[str | None]


class MessageInfo(TypedDict):
    id: str
    role: str


class TextPart(TypedDict):
    type: Literal["text"]
    text: str


class Message(TypedDict):
    info: MessageInfo
    parts: list[dict[str, Any]]


# ---------------------------------------------------------------------------
# Event types
# ---------------------------------------------------------------------------

Event = dict[str, Any]
EventPermissionAsked = Event
EventQuestionAsked = Event


# ---------------------------------------------------------------------------
# Server handle
# ---------------------------------------------------------------------------

class OpencodeServer:
    def __init__(self, url: str, close: Any) -> None:
        self.url = url
        self.close = close


# ---------------------------------------------------------------------------
# API namespaces
# ---------------------------------------------------------------------------

class _SessionApi:
    def __init__(self, client: httpx.AsyncClient, base: str) -> None:
        self._client = client
        self._base = base

    async def create(
        self,
        agent: str = "build",
        directory: str | None = None,
    ) -> Session:
        body: dict[str, Any] = {"agent": agent}
        if directory is not None:
            body["directory"] = directory
        r = await self._client.post(f"{self._base}/session", json=body)
        r.raise_for_status()
        return r.json()

    async def prompt_async(self, session_id: str, parts: list[PromptPart]) -> None:
        r = await self._client.post(
            f"{self._base}/session/{session_id}/prompt_async",
            json={"parts": parts},
        )
        r.raise_for_status()

    async def messages(self, session_id: str) -> list[Message]:
        r = await self._client.get(f"{self._base}/session/{session_id}/message")
        r.raise_for_status()
        return r.json()


class EventSubscription:
    """Holds an open SSE connection and exposes its event stream."""

    def __init__(
        self,
        stream_ctx: Any,
        response: httpx.Response,
    ) -> None:
        self._ctx = stream_ctx
        self._response = response

    @property
    def stream(self) -> AsyncIterator[Event]:
        return self._iter()

    async def _iter(self) -> AsyncIterator[Event]:
        try:
            async for line in self._response.aiter_lines():
                line = line.strip()
                if not line or line.startswith(":"):
                    continue
                if line.startswith("data:"):
                    payload = line[len("data:"):].strip()
                    try:
                        yield json.loads(payload)
                    except Exception:
                        continue
        finally:
            await self._ctx.__aexit__(None, None, None)


class _EventApi:
    def __init__(self, client: httpx.AsyncClient, base: str) -> None:
        self._client = client
        self._base = base

    async def subscribe(self) -> EventSubscription:
        stream_ctx = self._client.stream("GET", f"{self._base}/event")
        response = await stream_ctx.__aenter__()
        if response.status_code != 200:
            await stream_ctx.__aexit__(None, None, None)
            raise RuntimeError(f"event subscribe failed: {response.status_code}")
        return EventSubscription(stream_ctx, response)


class _PermissionApi:
    def __init__(self, client: httpx.AsyncClient, base: str) -> None:
        self._client = client
        self._base = base

    async def reply(self, request_id: str, reply: str) -> None:
        r = await self._client.post(
            f"{self._base}/permission/{request_id}/reply",
            json={"reply": reply},
        )
        r.raise_for_status()


class _QuestionApi:
    def __init__(self, client: httpx.AsyncClient, base: str) -> None:
        self._client = client
        self._base = base

    async def reply(self, request_id: str, answers: list[list[str]]) -> None:
        r = await self._client.post(
            f"{self._base}/question/{request_id}/reply",
            json={"answers": answers},
        )
        r.raise_for_status()


class OpencodeClient:
    def __init__(self, client: httpx.AsyncClient, base: str) -> None:
        self._client = client
        self.session = _SessionApi(client, base)
        self.event = _EventApi(client, base)
        self.permission = _PermissionApi(client, base)
        self.question = _QuestionApi(client, base)


async def create_opencode_client(
    hostname: str = "127.0.0.1",
    port: int = 9876,
) -> tuple[OpencodeClient, OpencodeServer]:
    """Connect to an already-running OpenCode server.

    The TypeScript SDK starts its own server; this Python client connects to
    whichever server is listening at `hostname:port`.
    """
    base = f"http://{hostname}:{port}"
    http = httpx.AsyncClient(timeout=None)
    client = OpencodeClient(http, base)
    server = OpencodeServer(url=base, close=http.aclose)
    return client, server


__all__ = [
    "create_opencode_client",
    "OpencodeClient",
    "OpencodeServer",
    "EventSubscription",
    "Event",
    "EventPermissionAsked",
    "EventQuestionAsked",
    "Session",
    "Message",
    "MessageInfo",
    "TextPart",
    "TextPartInput",
    "FilePartInput",
    "PromptPart",
]

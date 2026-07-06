"""Smoke test: list sessions from the local opencode server."""
import asyncio
import os
from opencode_sdk import ApiClient, Configuration
from opencode_sdk.api.session_api import SessionApi


async def main() -> int:
    config = Configuration(host="http://127.0.0.1:8082")
    async with ApiClient(config) as client:
        api = SessionApi(client)
        res = await api.session_list_with_http_info(limit=5)
        if res.status_code != 200:
            print(f"FAIL: status={res.status_code} body={res.raw_data[:200]!r}")
            return 1
        sessions = res.data
        print(f"OK: {len(sessions)} sessions")
        for s in sessions:
            print(f"  - {s.id}  {s.title!r}")
            print(f"      project_id={s.project_id or '?'}  directory={s.directory!r}  path={s.path!r}")
        return 0


if __name__ == "__main__":
    raise SystemExit(asyncio.run(main()))

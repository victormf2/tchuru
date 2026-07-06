"""Create a session, fire-and-forget a prompt, exit."""
import asyncio
import os

from opencode_sdk import ApiClient, Configuration
from opencode_sdk.api.session_api import SessionApi
from opencode_sdk.models.session_create_request import SessionCreateRequest
from opencode_sdk.models.session_prompt_async_request import SessionPromptAsyncRequest
from opencode_sdk.models.session_prompt_request_parts_inner import SessionPromptRequestPartsInner
from opencode_sdk.models.text_part_input import TextPartInput


async def main() -> None:
    directory = os.environ.get("OPENCODE_DIR") or os.getcwd()
    cfg = Configuration(host="http://127.0.0.1:8082")
    async with ApiClient(cfg) as client:
        api = SessionApi(client)

        create = await api.session_create_with_http_info(
            directory=directory,
            session_create_request=SessionCreateRequest(),
        )
        session_id = create.data.id
        print(f"created: {session_id}  dir={create.data.directory!r}")

        part = SessionPromptRequestPartsInner(
            actual_instance=TextPartInput(type="text", text="just say hello in one short sentence")
        )
        prompt = SessionPromptAsyncRequest(parts=[part])
        res = await api.session_prompt_async_with_http_info(
            session_id=session_id,
            session_prompt_async_request=prompt,
        )
        print(f"prompt:  status={res.status_code}  (fire-and-forget, not waiting)")


if __name__ == "__main__":
    asyncio.run(main())

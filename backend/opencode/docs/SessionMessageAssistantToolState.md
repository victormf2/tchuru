# SessionMessageAssistantToolState


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | 
**input** | **object** |  | 
**structured** | **object** |  | 
**content** | [**List[LLMToolContent]**](LLMToolContent.md) |  | 
**attachments** | [**List[PromptFileAttachment]**](PromptFileAttachment.md) |  | [optional] 
**output_paths** | **List[str]** |  | [optional] 
**result** | **object** |  | [optional] 
**error** | [**SessionErrorUnknown**](SessionErrorUnknown.md) |  | 

## Example

```python
from opencode_sdk.models.session_message_assistant_tool_state import SessionMessageAssistantToolState

# TODO update the JSON string below
json = "{}"
# create an instance of SessionMessageAssistantToolState from a JSON string
session_message_assistant_tool_state_instance = SessionMessageAssistantToolState.from_json(json)
# print the JSON string representation of the object
print(SessionMessageAssistantToolState.to_json())

# convert the object into a dict
session_message_assistant_tool_state_dict = session_message_assistant_tool_state_instance.to_dict()
# create an instance of SessionMessageAssistantToolState from a dict
session_message_assistant_tool_state_from_dict = SessionMessageAssistantToolState.from_dict(session_message_assistant_tool_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



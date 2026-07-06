# SessionMessageToolStateCompleted


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | 
**input** | **object** |  | 
**attachments** | [**List[PromptFileAttachment]**](PromptFileAttachment.md) |  | [optional] 
**content** | [**List[LLMToolContent]**](LLMToolContent.md) |  | 
**output_paths** | **List[str]** |  | [optional] 
**structured** | **object** |  | 
**result** | **object** |  | [optional] 

## Example

```python
from opencode_sdk.models.session_message_tool_state_completed import SessionMessageToolStateCompleted

# TODO update the JSON string below
json = "{}"
# create an instance of SessionMessageToolStateCompleted from a JSON string
session_message_tool_state_completed_instance = SessionMessageToolStateCompleted.from_json(json)
# print the JSON string representation of the object
print(SessionMessageToolStateCompleted.to_json())

# convert the object into a dict
session_message_tool_state_completed_dict = session_message_tool_state_completed_instance.to_dict()
# create an instance of SessionMessageToolStateCompleted from a dict
session_message_tool_state_completed_from_dict = SessionMessageToolStateCompleted.from_dict(session_message_tool_state_completed_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



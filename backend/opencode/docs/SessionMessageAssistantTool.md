# SessionMessageAssistantTool


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**name** | **str** |  | 
**provider** | [**SessionMessageAssistantToolProvider**](SessionMessageAssistantToolProvider.md) |  | [optional] 
**state** | [**SessionMessageAssistantToolState**](SessionMessageAssistantToolState.md) |  | 
**time** | [**SessionMessageAssistantToolTime**](SessionMessageAssistantToolTime.md) |  | 

## Example

```python
from opencode_sdk.models.session_message_assistant_tool import SessionMessageAssistantTool

# TODO update the JSON string below
json = "{}"
# create an instance of SessionMessageAssistantTool from a JSON string
session_message_assistant_tool_instance = SessionMessageAssistantTool.from_json(json)
# print the JSON string representation of the object
print(SessionMessageAssistantTool.to_json())

# convert the object into a dict
session_message_assistant_tool_dict = session_message_assistant_tool_instance.to_dict()
# create an instance of SessionMessageAssistantTool from a dict
session_message_assistant_tool_from_dict = SessionMessageAssistantTool.from_dict(session_message_assistant_tool_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



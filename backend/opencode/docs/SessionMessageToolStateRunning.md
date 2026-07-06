# SessionMessageToolStateRunning


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | 
**input** | **object** |  | 
**structured** | **object** |  | 
**content** | [**List[LLMToolContent]**](LLMToolContent.md) |  | 

## Example

```python
from opencode_sdk.models.session_message_tool_state_running import SessionMessageToolStateRunning

# TODO update the JSON string below
json = "{}"
# create an instance of SessionMessageToolStateRunning from a JSON string
session_message_tool_state_running_instance = SessionMessageToolStateRunning.from_json(json)
# print the JSON string representation of the object
print(SessionMessageToolStateRunning.to_json())

# convert the object into a dict
session_message_tool_state_running_dict = session_message_tool_state_running_instance.to_dict()
# create an instance of SessionMessageToolStateRunning from a dict
session_message_tool_state_running_from_dict = SessionMessageToolStateRunning.from_dict(session_message_tool_state_running_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# SessionMessageToolStateError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | 
**input** | **object** |  | 
**content** | [**List[LLMToolContent]**](LLMToolContent.md) |  | 
**structured** | **object** |  | 
**error** | [**SessionErrorUnknown**](SessionErrorUnknown.md) |  | 
**result** | **object** |  | [optional] 

## Example

```python
from opencode_sdk.models.session_message_tool_state_error import SessionMessageToolStateError

# TODO update the JSON string below
json = "{}"
# create an instance of SessionMessageToolStateError from a JSON string
session_message_tool_state_error_instance = SessionMessageToolStateError.from_json(json)
# print the JSON string representation of the object
print(SessionMessageToolStateError.to_json())

# convert the object into a dict
session_message_tool_state_error_dict = session_message_tool_state_error_instance.to_dict()
# create an instance of SessionMessageToolStateError from a dict
session_message_tool_state_error_from_dict = SessionMessageToolStateError.from_dict(session_message_tool_state_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



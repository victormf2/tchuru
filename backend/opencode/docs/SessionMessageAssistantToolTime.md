# SessionMessageAssistantToolTime


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **float** |  | 
**ran** | **float** |  | [optional] 
**completed** | **float** |  | [optional] 
**pruned** | **float** |  | [optional] 

## Example

```python
from opencode_sdk.models.session_message_assistant_tool_time import SessionMessageAssistantToolTime

# TODO update the JSON string below
json = "{}"
# create an instance of SessionMessageAssistantToolTime from a JSON string
session_message_assistant_tool_time_instance = SessionMessageAssistantToolTime.from_json(json)
# print the JSON string representation of the object
print(SessionMessageAssistantToolTime.to_json())

# convert the object into a dict
session_message_assistant_tool_time_dict = session_message_assistant_tool_time_instance.to_dict()
# create an instance of SessionMessageAssistantToolTime from a dict
session_message_assistant_tool_time_from_dict = SessionMessageAssistantToolTime.from_dict(session_message_assistant_tool_time_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



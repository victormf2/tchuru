# SessionMessageAssistantReasoning


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**text** | **str** |  | 
**provider_metadata** | **Dict[str, object]** |  | [optional] 
**time** | [**SessionMessageShellTime**](SessionMessageShellTime.md) |  | [optional] 

## Example

```python
from opencode_sdk.models.session_message_assistant_reasoning import SessionMessageAssistantReasoning

# TODO update the JSON string below
json = "{}"
# create an instance of SessionMessageAssistantReasoning from a JSON string
session_message_assistant_reasoning_instance = SessionMessageAssistantReasoning.from_json(json)
# print the JSON string representation of the object
print(SessionMessageAssistantReasoning.to_json())

# convert the object into a dict
session_message_assistant_reasoning_dict = session_message_assistant_reasoning_instance.to_dict()
# create an instance of SessionMessageAssistantReasoning from a dict
session_message_assistant_reasoning_from_dict = SessionMessageAssistantReasoning.from_dict(session_message_assistant_reasoning_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



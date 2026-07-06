# SessionMessageAssistant


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**time** | [**SessionMessageShellTime**](SessionMessageShellTime.md) |  | 
**type** | **str** |  | 
**agent** | **str** |  | 
**model** | [**ModelRef**](ModelRef.md) |  | 
**content** | [**List[SessionMessageAssistantContentInner]**](SessionMessageAssistantContentInner.md) |  | 
**snapshot** | [**SessionMessageAssistantSnapshot**](SessionMessageAssistantSnapshot.md) |  | [optional] 
**finish** | **str** |  | [optional] 
**cost** | **float** |  | [optional] 
**tokens** | [**SessionTokens**](SessionTokens.md) |  | [optional] 
**error** | [**SessionErrorUnknown**](SessionErrorUnknown.md) |  | [optional] 

## Example

```python
from opencode_sdk.models.session_message_assistant import SessionMessageAssistant

# TODO update the JSON string below
json = "{}"
# create an instance of SessionMessageAssistant from a JSON string
session_message_assistant_instance = SessionMessageAssistant.from_json(json)
# print the JSON string representation of the object
print(SessionMessageAssistant.to_json())

# convert the object into a dict
session_message_assistant_dict = session_message_assistant_instance.to_dict()
# create an instance of SessionMessageAssistant from a dict
session_message_assistant_from_dict = SessionMessageAssistant.from_dict(session_message_assistant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



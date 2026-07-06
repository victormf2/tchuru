# SessionMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**time** | [**SessionMessageAgentSwitchedTime**](SessionMessageAgentSwitchedTime.md) |  | 
**type** | **str** |  | 
**agent** | **str** |  | 
**model** | [**ModelRef**](ModelRef.md) |  | 
**text** | **str** |  | 
**files** | [**List[PromptFileAttachment]**](PromptFileAttachment.md) |  | [optional] 
**agents** | [**List[PromptAgentAttachment]**](PromptAgentAttachment.md) |  | [optional] 
**session_id** | **str** |  | 
**call_id** | **str** |  | 
**command** | **str** |  | 
**output** | **str** |  | 
**content** | [**List[SessionMessageAssistantContentInner]**](SessionMessageAssistantContentInner.md) |  | 
**snapshot** | [**SessionMessageAssistantSnapshot**](SessionMessageAssistantSnapshot.md) |  | [optional] 
**finish** | **str** |  | [optional] 
**cost** | **float** |  | [optional] 
**tokens** | [**SessionTokens**](SessionTokens.md) |  | [optional] 
**error** | [**SessionErrorUnknown**](SessionErrorUnknown.md) |  | [optional] 
**reason** | **str** |  | 
**summary** | **str** |  | 
**recent** | **str** |  | 

## Example

```python
from opencode_sdk.models.session_message import SessionMessage

# TODO update the JSON string below
json = "{}"
# create an instance of SessionMessage from a JSON string
session_message_instance = SessionMessage.from_json(json)
# print the JSON string representation of the object
print(SessionMessage.to_json())

# convert the object into a dict
session_message_dict = session_message_instance.to_dict()
# create an instance of SessionMessage from a dict
session_message_from_dict = SessionMessage.from_dict(session_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



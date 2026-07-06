# SessionMessageAssistantContentInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**text** | **str** |  | 
**provider_metadata** | **Dict[str, object]** |  | [optional] 
**time** | [**SessionMessageAssistantToolTime**](SessionMessageAssistantToolTime.md) |  | 
**name** | **str** |  | 
**provider** | [**SessionMessageAssistantToolProvider**](SessionMessageAssistantToolProvider.md) |  | [optional] 
**state** | [**SessionMessageAssistantToolState**](SessionMessageAssistantToolState.md) |  | 

## Example

```python
from opencode_sdk.models.session_message_assistant_content_inner import SessionMessageAssistantContentInner

# TODO update the JSON string below
json = "{}"
# create an instance of SessionMessageAssistantContentInner from a JSON string
session_message_assistant_content_inner_instance = SessionMessageAssistantContentInner.from_json(json)
# print the JSON string representation of the object
print(SessionMessageAssistantContentInner.to_json())

# convert the object into a dict
session_message_assistant_content_inner_dict = session_message_assistant_content_inner_instance.to_dict()
# create an instance of SessionMessageAssistantContentInner from a dict
session_message_assistant_content_inner_from_dict = SessionMessageAssistantContentInner.from_dict(session_message_assistant_content_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



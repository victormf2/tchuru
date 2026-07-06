# SessionMessageAssistantToolProvider


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**executed** | **bool** |  | 
**metadata** | **Dict[str, object]** |  | [optional] 
**result_metadata** | **Dict[str, object]** |  | [optional] 

## Example

```python
from opencode_sdk.models.session_message_assistant_tool_provider import SessionMessageAssistantToolProvider

# TODO update the JSON string below
json = "{}"
# create an instance of SessionMessageAssistantToolProvider from a JSON string
session_message_assistant_tool_provider_instance = SessionMessageAssistantToolProvider.from_json(json)
# print the JSON string representation of the object
print(SessionMessageAssistantToolProvider.to_json())

# convert the object into a dict
session_message_assistant_tool_provider_dict = session_message_assistant_tool_provider_instance.to_dict()
# create an instance of SessionMessageAssistantToolProvider from a dict
session_message_assistant_tool_provider_from_dict = SessionMessageAssistantToolProvider.from_dict(session_message_assistant_tool_provider_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



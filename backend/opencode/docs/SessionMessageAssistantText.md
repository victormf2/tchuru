# SessionMessageAssistantText


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**text** | **str** |  | 

## Example

```python
from opencode_sdk.models.session_message_assistant_text import SessionMessageAssistantText

# TODO update the JSON string below
json = "{}"
# create an instance of SessionMessageAssistantText from a JSON string
session_message_assistant_text_instance = SessionMessageAssistantText.from_json(json)
# print the JSON string representation of the object
print(SessionMessageAssistantText.to_json())

# convert the object into a dict
session_message_assistant_text_dict = session_message_assistant_text_instance.to_dict()
# create an instance of SessionMessageAssistantText from a dict
session_message_assistant_text_from_dict = SessionMessageAssistantText.from_dict(session_message_assistant_text_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



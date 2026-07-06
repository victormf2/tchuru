# SessionMessageUser


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**time** | [**SessionMessageAgentSwitchedTime**](SessionMessageAgentSwitchedTime.md) |  | 
**text** | **str** |  | 
**files** | [**List[PromptFileAttachment]**](PromptFileAttachment.md) |  | [optional] 
**agents** | [**List[PromptAgentAttachment]**](PromptAgentAttachment.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from opencode_sdk.models.session_message_user import SessionMessageUser

# TODO update the JSON string below
json = "{}"
# create an instance of SessionMessageUser from a JSON string
session_message_user_instance = SessionMessageUser.from_json(json)
# print the JSON string representation of the object
print(SessionMessageUser.to_json())

# convert the object into a dict
session_message_user_dict = session_message_user_instance.to_dict()
# create an instance of SessionMessageUser from a dict
session_message_user_from_dict = SessionMessageUser.from_dict(session_message_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



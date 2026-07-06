# SessionMessagesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[SessionMessage]**](SessionMessage.md) |  | 
**cursor** | [**SessionsResponseCursor**](SessionsResponseCursor.md) |  | 

## Example

```python
from opencode_sdk.models.session_messages_response import SessionMessagesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SessionMessagesResponse from a JSON string
session_messages_response_instance = SessionMessagesResponse.from_json(json)
# print the JSON string representation of the object
print(SessionMessagesResponse.to_json())

# convert the object into a dict
session_messages_response_dict = session_messages_response_instance.to_dict()
# create an instance of SessionMessagesResponse from a dict
session_messages_response_from_dict = SessionMessagesResponse.from_dict(session_messages_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



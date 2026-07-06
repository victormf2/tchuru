# UserMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**session_id** | **str** |  | 
**role** | **str** |  | 
**time** | [**UserMessageTime**](UserMessageTime.md) |  | 
**format** | [**OutputFormat**](OutputFormat.md) |  | [optional] 
**summary** | [**UserMessageSummary**](UserMessageSummary.md) |  | [optional] 
**agent** | **str** |  | 
**model** | [**UserMessageModel**](UserMessageModel.md) |  | 
**system** | **str** |  | [optional] 
**tools** | **Dict[str, bool]** |  | [optional] 

## Example

```python
from opencode_sdk.models.user_message import UserMessage

# TODO update the JSON string below
json = "{}"
# create an instance of UserMessage from a JSON string
user_message_instance = UserMessage.from_json(json)
# print the JSON string representation of the object
print(UserMessage.to_json())

# convert the object into a dict
user_message_dict = user_message_instance.to_dict()
# create an instance of UserMessage from a dict
user_message_from_dict = UserMessage.from_dict(user_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



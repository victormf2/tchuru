# Message


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**session_id** | **str** |  | 
**role** | **str** |  | 
**time** | [**AssistantMessageTime**](AssistantMessageTime.md) |  | 
**format** | [**OutputFormat**](OutputFormat.md) |  | [optional] 
**summary** | **bool** |  | [optional] 
**agent** | **str** |  | 
**model** | [**UserMessageModel**](UserMessageModel.md) |  | 
**system** | **str** |  | [optional] 
**tools** | **Dict[str, bool]** |  | [optional] 
**error** | [**AssistantMessageError**](AssistantMessageError.md) |  | [optional] 
**parent_id** | **str** |  | 
**model_id** | **str** |  | 
**provider_id** | **str** |  | 
**mode** | **str** |  | 
**path** | [**AssistantMessagePath**](AssistantMessagePath.md) |  | 
**cost** | **float** |  | 
**tokens** | [**AssistantMessageTokens**](AssistantMessageTokens.md) |  | 
**structured** | **object** |  | [optional] 
**variant** | **str** |  | [optional] 
**finish** | **str** |  | [optional] 

## Example

```python
from opencode_sdk.models.message import Message

# TODO update the JSON string below
json = "{}"
# create an instance of Message from a JSON string
message_instance = Message.from_json(json)
# print the JSON string representation of the object
print(Message.to_json())

# convert the object into a dict
message_dict = message_instance.to_dict()
# create an instance of Message from a dict
message_from_dict = Message.from_dict(message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



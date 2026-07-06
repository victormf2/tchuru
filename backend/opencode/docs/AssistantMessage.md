# AssistantMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**session_id** | **str** |  | 
**role** | **str** |  | 
**time** | [**AssistantMessageTime**](AssistantMessageTime.md) |  | 
**error** | [**AssistantMessageError**](AssistantMessageError.md) |  | [optional] 
**parent_id** | **str** |  | 
**model_id** | **str** |  | 
**provider_id** | **str** |  | 
**mode** | **str** |  | 
**agent** | **str** |  | 
**path** | [**AssistantMessagePath**](AssistantMessagePath.md) |  | 
**summary** | **bool** |  | [optional] 
**cost** | **float** |  | 
**tokens** | [**AssistantMessageTokens**](AssistantMessageTokens.md) |  | 
**structured** | **object** |  | [optional] 
**variant** | **str** |  | [optional] 
**finish** | **str** |  | [optional] 

## Example

```python
from opencode_sdk.models.assistant_message import AssistantMessage

# TODO update the JSON string below
json = "{}"
# create an instance of AssistantMessage from a JSON string
assistant_message_instance = AssistantMessage.from_json(json)
# print the JSON string representation of the object
print(AssistantMessage.to_json())

# convert the object into a dict
assistant_message_dict = assistant_message_instance.to_dict()
# create an instance of AssistantMessage from a dict
assistant_message_from_dict = AssistantMessage.from_dict(assistant_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



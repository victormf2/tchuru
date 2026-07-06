# MessageUpdated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**GlobalEventPayloadAnyOf7Properties**](GlobalEventPayloadAnyOf7Properties.md) |  | 

## Example

```python
from opencode_sdk.models.message_updated import MessageUpdated

# TODO update the JSON string below
json = "{}"
# create an instance of MessageUpdated from a JSON string
message_updated_instance = MessageUpdated.from_json(json)
# print the JSON string representation of the object
print(MessageUpdated.to_json())

# convert the object into a dict
message_updated_dict = message_updated_instance.to_dict()
# create an instance of MessageUpdated from a dict
message_updated_from_dict = MessageUpdated.from_dict(message_updated_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



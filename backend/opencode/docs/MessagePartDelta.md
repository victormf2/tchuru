# MessagePartDelta


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**GlobalEventPayloadAnyOf43Properties**](GlobalEventPayloadAnyOf43Properties.md) |  | 

## Example

```python
from opencode_sdk.models.message_part_delta import MessagePartDelta

# TODO update the JSON string below
json = "{}"
# create an instance of MessagePartDelta from a JSON string
message_part_delta_instance = MessagePartDelta.from_json(json)
# print the JSON string representation of the object
print(MessagePartDelta.to_json())

# convert the object into a dict
message_part_delta_dict = message_part_delta_instance.to_dict()
# create an instance of MessagePartDelta from a dict
message_part_delta_from_dict = MessagePartDelta.from_dict(message_part_delta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



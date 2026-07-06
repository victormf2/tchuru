# MessagePartRemoved


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**GlobalEventPayloadAnyOf10Properties**](GlobalEventPayloadAnyOf10Properties.md) |  | 

## Example

```python
from opencode_sdk.models.message_part_removed import MessagePartRemoved

# TODO update the JSON string below
json = "{}"
# create an instance of MessagePartRemoved from a JSON string
message_part_removed_instance = MessagePartRemoved.from_json(json)
# print the JSON string representation of the object
print(MessagePartRemoved.to_json())

# convert the object into a dict
message_part_removed_dict = message_part_removed_instance.to_dict()
# create an instance of MessagePartRemoved from a dict
message_part_removed_from_dict = MessagePartRemoved.from_dict(message_part_removed_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



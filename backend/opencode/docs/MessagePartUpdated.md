# MessagePartUpdated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**GlobalEventPayloadAnyOf9Properties**](GlobalEventPayloadAnyOf9Properties.md) |  | 

## Example

```python
from opencode_sdk.models.message_part_updated import MessagePartUpdated

# TODO update the JSON string below
json = "{}"
# create an instance of MessagePartUpdated from a JSON string
message_part_updated_instance = MessagePartUpdated.from_json(json)
# print the JSON string representation of the object
print(MessagePartUpdated.to_json())

# convert the object into a dict
message_part_updated_dict = message_part_updated_instance.to_dict()
# create an instance of MessagePartUpdated from a dict
message_part_updated_from_dict = MessagePartUpdated.from_dict(message_part_updated_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# MessageRemoved


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**GlobalEventPayloadAnyOf8Properties**](GlobalEventPayloadAnyOf8Properties.md) |  | 

## Example

```python
from opencode_sdk.models.message_removed import MessageRemoved

# TODO update the JSON string below
json = "{}"
# create an instance of MessageRemoved from a JSON string
message_removed_instance = MessageRemoved.from_json(json)
# print the JSON string representation of the object
print(MessageRemoved.to_json())

# convert the object into a dict
message_removed_dict = message_removed_instance.to_dict()
# create an instance of MessageRemoved from a dict
message_removed_from_dict = MessageRemoved.from_dict(message_removed_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# TodoUpdated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**GlobalEventPayloadAnyOf62Properties**](GlobalEventPayloadAnyOf62Properties.md) |  | 

## Example

```python
from opencode_sdk.models.todo_updated import TodoUpdated

# TODO update the JSON string below
json = "{}"
# create an instance of TodoUpdated from a JSON string
todo_updated_instance = TodoUpdated.from_json(json)
# print the JSON string representation of the object
print(TodoUpdated.to_json())

# convert the object into a dict
todo_updated_dict = todo_updated_instance.to_dict()
# create an instance of TodoUpdated from a dict
todo_updated_from_dict = TodoUpdated.from_dict(todo_updated_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



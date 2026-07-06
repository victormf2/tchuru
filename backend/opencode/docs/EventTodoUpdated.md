# EventTodoUpdated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf62Properties**](GlobalEventPayloadAnyOf62Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_todo_updated import EventTodoUpdated

# TODO update the JSON string below
json = "{}"
# create an instance of EventTodoUpdated from a JSON string
event_todo_updated_instance = EventTodoUpdated.from_json(json)
# print the JSON string representation of the object
print(EventTodoUpdated.to_json())

# convert the object into a dict
event_todo_updated_dict = event_todo_updated_instance.to_dict()
# create an instance of EventTodoUpdated from a dict
event_todo_updated_from_dict = EventTodoUpdated.from_dict(event_todo_updated_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



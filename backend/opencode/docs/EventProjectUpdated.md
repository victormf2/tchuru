# EventProjectUpdated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf73Properties**](GlobalEventPayloadAnyOf73Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_project_updated import EventProjectUpdated

# TODO update the JSON string below
json = "{}"
# create an instance of EventProjectUpdated from a JSON string
event_project_updated_instance = EventProjectUpdated.from_json(json)
# print the JSON string representation of the object
print(EventProjectUpdated.to_json())

# convert the object into a dict
event_project_updated_dict = event_project_updated_instance.to_dict()
# create an instance of EventProjectUpdated from a dict
event_project_updated_from_dict = EventProjectUpdated.from_dict(event_project_updated_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# EventProjectDirectoriesUpdated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf53Properties**](GlobalEventPayloadAnyOf53Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_project_directories_updated import EventProjectDirectoriesUpdated

# TODO update the JSON string below
json = "{}"
# create an instance of EventProjectDirectoriesUpdated from a JSON string
event_project_directories_updated_instance = EventProjectDirectoriesUpdated.from_json(json)
# print the JSON string representation of the object
print(EventProjectDirectoriesUpdated.to_json())

# convert the object into a dict
event_project_directories_updated_dict = event_project_directories_updated_instance.to_dict()
# create an instance of EventProjectDirectoriesUpdated from a dict
event_project_directories_updated_from_dict = EventProjectDirectoriesUpdated.from_dict(event_project_directories_updated_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



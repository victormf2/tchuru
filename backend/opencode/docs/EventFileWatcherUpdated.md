# EventFileWatcherUpdated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf54Properties**](GlobalEventPayloadAnyOf54Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_file_watcher_updated import EventFileWatcherUpdated

# TODO update the JSON string below
json = "{}"
# create an instance of EventFileWatcherUpdated from a JSON string
event_file_watcher_updated_instance = EventFileWatcherUpdated.from_json(json)
# print the JSON string representation of the object
print(EventFileWatcherUpdated.to_json())

# convert the object into a dict
event_file_watcher_updated_dict = event_file_watcher_updated_instance.to_dict()
# create an instance of EventFileWatcherUpdated from a dict
event_file_watcher_updated_from_dict = EventFileWatcherUpdated.from_dict(event_file_watcher_updated_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# FileWatcherUpdated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**GlobalEventPayloadAnyOf54Properties**](GlobalEventPayloadAnyOf54Properties.md) |  | 

## Example

```python
from opencode_sdk.models.file_watcher_updated import FileWatcherUpdated

# TODO update the JSON string below
json = "{}"
# create an instance of FileWatcherUpdated from a JSON string
file_watcher_updated_instance = FileWatcherUpdated.from_json(json)
# print the JSON string representation of the object
print(FileWatcherUpdated.to_json())

# convert the object into a dict
file_watcher_updated_dict = file_watcher_updated_instance.to_dict()
# create an instance of FileWatcherUpdated from a dict
file_watcher_updated_from_dict = FileWatcherUpdated.from_dict(file_watcher_updated_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



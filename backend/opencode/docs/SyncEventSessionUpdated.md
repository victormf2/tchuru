# SyncEventSessionUpdated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**sync_event** | [**SyncEventSessionUpdatedSyncEvent**](SyncEventSessionUpdatedSyncEvent.md) |  | 

## Example

```python
from opencode_sdk.models.sync_event_session_updated import SyncEventSessionUpdated

# TODO update the JSON string below
json = "{}"
# create an instance of SyncEventSessionUpdated from a JSON string
sync_event_session_updated_instance = SyncEventSessionUpdated.from_json(json)
# print the JSON string representation of the object
print(SyncEventSessionUpdated.to_json())

# convert the object into a dict
sync_event_session_updated_dict = sync_event_session_updated_instance.to_dict()
# create an instance of SyncEventSessionUpdated from a dict
sync_event_session_updated_from_dict = SyncEventSessionUpdated.from_dict(sync_event_session_updated_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



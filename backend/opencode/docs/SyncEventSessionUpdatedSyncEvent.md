# SyncEventSessionUpdatedSyncEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**seq** | **float** |  | 
**aggregate_id** | **str** |  | 
**data** | [**GlobalEventPayloadAnyOf4Properties**](GlobalEventPayloadAnyOf4Properties.md) |  | 

## Example

```python
from opencode_sdk.models.sync_event_session_updated_sync_event import SyncEventSessionUpdatedSyncEvent

# TODO update the JSON string below
json = "{}"
# create an instance of SyncEventSessionUpdatedSyncEvent from a JSON string
sync_event_session_updated_sync_event_instance = SyncEventSessionUpdatedSyncEvent.from_json(json)
# print the JSON string representation of the object
print(SyncEventSessionUpdatedSyncEvent.to_json())

# convert the object into a dict
sync_event_session_updated_sync_event_dict = sync_event_session_updated_sync_event_instance.to_dict()
# create an instance of SyncEventSessionUpdatedSyncEvent from a dict
sync_event_session_updated_sync_event_from_dict = SyncEventSessionUpdatedSyncEvent.from_dict(sync_event_session_updated_sync_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



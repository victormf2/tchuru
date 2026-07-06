# SyncEventSessionNextSyntheticSyncEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**seq** | **float** |  | 
**aggregate_id** | **str** |  | 
**data** | [**GlobalEventPayloadAnyOf16Properties**](GlobalEventPayloadAnyOf16Properties.md) |  | 

## Example

```python
from opencode_sdk.models.sync_event_session_next_synthetic_sync_event import SyncEventSessionNextSyntheticSyncEvent

# TODO update the JSON string below
json = "{}"
# create an instance of SyncEventSessionNextSyntheticSyncEvent from a JSON string
sync_event_session_next_synthetic_sync_event_instance = SyncEventSessionNextSyntheticSyncEvent.from_json(json)
# print the JSON string representation of the object
print(SyncEventSessionNextSyntheticSyncEvent.to_json())

# convert the object into a dict
sync_event_session_next_synthetic_sync_event_dict = sync_event_session_next_synthetic_sync_event_instance.to_dict()
# create an instance of SyncEventSessionNextSyntheticSyncEvent from a dict
sync_event_session_next_synthetic_sync_event_from_dict = SyncEventSessionNextSyntheticSyncEvent.from_dict(sync_event_session_next_synthetic_sync_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



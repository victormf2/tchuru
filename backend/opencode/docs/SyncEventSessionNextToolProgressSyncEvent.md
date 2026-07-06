# SyncEventSessionNextToolProgressSyncEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**seq** | **float** |  | 
**aggregate_id** | **str** |  | 
**data** | [**GlobalEventPayloadAnyOf33Properties**](GlobalEventPayloadAnyOf33Properties.md) |  | 

## Example

```python
from opencode_sdk.models.sync_event_session_next_tool_progress_sync_event import SyncEventSessionNextToolProgressSyncEvent

# TODO update the JSON string below
json = "{}"
# create an instance of SyncEventSessionNextToolProgressSyncEvent from a JSON string
sync_event_session_next_tool_progress_sync_event_instance = SyncEventSessionNextToolProgressSyncEvent.from_json(json)
# print the JSON string representation of the object
print(SyncEventSessionNextToolProgressSyncEvent.to_json())

# convert the object into a dict
sync_event_session_next_tool_progress_sync_event_dict = sync_event_session_next_tool_progress_sync_event_instance.to_dict()
# create an instance of SyncEventSessionNextToolProgressSyncEvent from a dict
sync_event_session_next_tool_progress_sync_event_from_dict = SyncEventSessionNextToolProgressSyncEvent.from_dict(sync_event_session_next_tool_progress_sync_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



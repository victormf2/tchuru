# SyncEventSessionNextCompactionStarted


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**sync_event** | [**SyncEventSessionNextCompactionStartedSyncEvent**](SyncEventSessionNextCompactionStartedSyncEvent.md) |  | 

## Example

```python
from opencode_sdk.models.sync_event_session_next_compaction_started import SyncEventSessionNextCompactionStarted

# TODO update the JSON string below
json = "{}"
# create an instance of SyncEventSessionNextCompactionStarted from a JSON string
sync_event_session_next_compaction_started_instance = SyncEventSessionNextCompactionStarted.from_json(json)
# print the JSON string representation of the object
print(SyncEventSessionNextCompactionStarted.to_json())

# convert the object into a dict
sync_event_session_next_compaction_started_dict = sync_event_session_next_compaction_started_instance.to_dict()
# create an instance of SyncEventSessionNextCompactionStarted from a dict
sync_event_session_next_compaction_started_from_dict = SyncEventSessionNextCompactionStarted.from_dict(sync_event_session_next_compaction_started_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



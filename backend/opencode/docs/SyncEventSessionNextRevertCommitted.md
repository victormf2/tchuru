# SyncEventSessionNextRevertCommitted


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**sync_event** | [**SyncEventSessionNextRevertCommittedSyncEvent**](SyncEventSessionNextRevertCommittedSyncEvent.md) |  | 

## Example

```python
from opencode_sdk.models.sync_event_session_next_revert_committed import SyncEventSessionNextRevertCommitted

# TODO update the JSON string below
json = "{}"
# create an instance of SyncEventSessionNextRevertCommitted from a JSON string
sync_event_session_next_revert_committed_instance = SyncEventSessionNextRevertCommitted.from_json(json)
# print the JSON string representation of the object
print(SyncEventSessionNextRevertCommitted.to_json())

# convert the object into a dict
sync_event_session_next_revert_committed_dict = sync_event_session_next_revert_committed_instance.to_dict()
# create an instance of SyncEventSessionNextRevertCommitted from a dict
sync_event_session_next_revert_committed_from_dict = SyncEventSessionNextRevertCommitted.from_dict(sync_event_session_next_revert_committed_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



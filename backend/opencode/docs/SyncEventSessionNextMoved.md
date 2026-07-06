# SyncEventSessionNextMoved


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**sync_event** | [**SyncEventSessionNextMovedSyncEvent**](SyncEventSessionNextMovedSyncEvent.md) |  | 

## Example

```python
from opencode_sdk.models.sync_event_session_next_moved import SyncEventSessionNextMoved

# TODO update the JSON string below
json = "{}"
# create an instance of SyncEventSessionNextMoved from a JSON string
sync_event_session_next_moved_instance = SyncEventSessionNextMoved.from_json(json)
# print the JSON string representation of the object
print(SyncEventSessionNextMoved.to_json())

# convert the object into a dict
sync_event_session_next_moved_dict = sync_event_session_next_moved_instance.to_dict()
# create an instance of SyncEventSessionNextMoved from a dict
sync_event_session_next_moved_from_dict = SyncEventSessionNextMoved.from_dict(sync_event_session_next_moved_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



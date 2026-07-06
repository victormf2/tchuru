# SyncEventSessionDeleted


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**sync_event** | [**SyncEventSessionDeletedSyncEvent**](SyncEventSessionDeletedSyncEvent.md) |  | 

## Example

```python
from opencode_sdk.models.sync_event_session_deleted import SyncEventSessionDeleted

# TODO update the JSON string below
json = "{}"
# create an instance of SyncEventSessionDeleted from a JSON string
sync_event_session_deleted_instance = SyncEventSessionDeleted.from_json(json)
# print the JSON string representation of the object
print(SyncEventSessionDeleted.to_json())

# convert the object into a dict
sync_event_session_deleted_dict = sync_event_session_deleted_instance.to_dict()
# create an instance of SyncEventSessionDeleted from a dict
sync_event_session_deleted_from_dict = SyncEventSessionDeleted.from_dict(sync_event_session_deleted_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



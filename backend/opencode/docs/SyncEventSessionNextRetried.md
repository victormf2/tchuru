# SyncEventSessionNextRetried


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**sync_event** | [**SyncEventSessionNextRetriedSyncEvent**](SyncEventSessionNextRetriedSyncEvent.md) |  | 

## Example

```python
from opencode_sdk.models.sync_event_session_next_retried import SyncEventSessionNextRetried

# TODO update the JSON string below
json = "{}"
# create an instance of SyncEventSessionNextRetried from a JSON string
sync_event_session_next_retried_instance = SyncEventSessionNextRetried.from_json(json)
# print the JSON string representation of the object
print(SyncEventSessionNextRetried.to_json())

# convert the object into a dict
sync_event_session_next_retried_dict = sync_event_session_next_retried_instance.to_dict()
# create an instance of SyncEventSessionNextRetried from a dict
sync_event_session_next_retried_from_dict = SyncEventSessionNextRetried.from_dict(sync_event_session_next_retried_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# SyncEventSessionNextContextUpdated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**sync_event** | [**SyncEventSessionNextContextUpdatedSyncEvent**](SyncEventSessionNextContextUpdatedSyncEvent.md) |  | 

## Example

```python
from opencode_sdk.models.sync_event_session_next_context_updated import SyncEventSessionNextContextUpdated

# TODO update the JSON string below
json = "{}"
# create an instance of SyncEventSessionNextContextUpdated from a JSON string
sync_event_session_next_context_updated_instance = SyncEventSessionNextContextUpdated.from_json(json)
# print the JSON string representation of the object
print(SyncEventSessionNextContextUpdated.to_json())

# convert the object into a dict
sync_event_session_next_context_updated_dict = sync_event_session_next_context_updated_instance.to_dict()
# create an instance of SyncEventSessionNextContextUpdated from a dict
sync_event_session_next_context_updated_from_dict = SyncEventSessionNextContextUpdated.from_dict(sync_event_session_next_context_updated_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



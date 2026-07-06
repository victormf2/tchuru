# SyncEventSessionNextPrompted


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**sync_event** | [**SyncEventSessionNextPromptedSyncEvent**](SyncEventSessionNextPromptedSyncEvent.md) |  | 

## Example

```python
from opencode_sdk.models.sync_event_session_next_prompted import SyncEventSessionNextPrompted

# TODO update the JSON string below
json = "{}"
# create an instance of SyncEventSessionNextPrompted from a JSON string
sync_event_session_next_prompted_instance = SyncEventSessionNextPrompted.from_json(json)
# print the JSON string representation of the object
print(SyncEventSessionNextPrompted.to_json())

# convert the object into a dict
sync_event_session_next_prompted_dict = sync_event_session_next_prompted_instance.to_dict()
# create an instance of SyncEventSessionNextPrompted from a dict
sync_event_session_next_prompted_from_dict = SyncEventSessionNextPrompted.from_dict(sync_event_session_next_prompted_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



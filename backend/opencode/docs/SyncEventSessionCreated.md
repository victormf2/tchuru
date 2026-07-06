# SyncEventSessionCreated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**sync_event** | [**SyncEventSessionCreatedSyncEvent**](SyncEventSessionCreatedSyncEvent.md) |  | 

## Example

```python
from opencode_sdk.models.sync_event_session_created import SyncEventSessionCreated

# TODO update the JSON string below
json = "{}"
# create an instance of SyncEventSessionCreated from a JSON string
sync_event_session_created_instance = SyncEventSessionCreated.from_json(json)
# print the JSON string representation of the object
print(SyncEventSessionCreated.to_json())

# convert the object into a dict
sync_event_session_created_dict = sync_event_session_created_instance.to_dict()
# create an instance of SyncEventSessionCreated from a dict
sync_event_session_created_from_dict = SyncEventSessionCreated.from_dict(sync_event_session_created_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



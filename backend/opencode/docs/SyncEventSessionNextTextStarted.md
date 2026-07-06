# SyncEventSessionNextTextStarted


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**sync_event** | [**SyncEventSessionNextTextStartedSyncEvent**](SyncEventSessionNextTextStartedSyncEvent.md) |  | 

## Example

```python
from opencode_sdk.models.sync_event_session_next_text_started import SyncEventSessionNextTextStarted

# TODO update the JSON string below
json = "{}"
# create an instance of SyncEventSessionNextTextStarted from a JSON string
sync_event_session_next_text_started_instance = SyncEventSessionNextTextStarted.from_json(json)
# print the JSON string representation of the object
print(SyncEventSessionNextTextStarted.to_json())

# convert the object into a dict
sync_event_session_next_text_started_dict = sync_event_session_next_text_started_instance.to_dict()
# create an instance of SyncEventSessionNextTextStarted from a dict
sync_event_session_next_text_started_from_dict = SyncEventSessionNextTextStarted.from_dict(sync_event_session_next_text_started_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



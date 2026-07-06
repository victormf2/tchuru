# SyncEventSessionNextTextEnded


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**sync_event** | [**SyncEventSessionNextTextEndedSyncEvent**](SyncEventSessionNextTextEndedSyncEvent.md) |  | 

## Example

```python
from opencode_sdk.models.sync_event_session_next_text_ended import SyncEventSessionNextTextEnded

# TODO update the JSON string below
json = "{}"
# create an instance of SyncEventSessionNextTextEnded from a JSON string
sync_event_session_next_text_ended_instance = SyncEventSessionNextTextEnded.from_json(json)
# print the JSON string representation of the object
print(SyncEventSessionNextTextEnded.to_json())

# convert the object into a dict
sync_event_session_next_text_ended_dict = sync_event_session_next_text_ended_instance.to_dict()
# create an instance of SyncEventSessionNextTextEnded from a dict
sync_event_session_next_text_ended_from_dict = SyncEventSessionNextTextEnded.from_dict(sync_event_session_next_text_ended_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



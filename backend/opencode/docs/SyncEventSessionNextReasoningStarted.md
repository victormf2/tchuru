# SyncEventSessionNextReasoningStarted


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**sync_event** | [**SyncEventSessionNextReasoningStartedSyncEvent**](SyncEventSessionNextReasoningStartedSyncEvent.md) |  | 

## Example

```python
from opencode_sdk.models.sync_event_session_next_reasoning_started import SyncEventSessionNextReasoningStarted

# TODO update the JSON string below
json = "{}"
# create an instance of SyncEventSessionNextReasoningStarted from a JSON string
sync_event_session_next_reasoning_started_instance = SyncEventSessionNextReasoningStarted.from_json(json)
# print the JSON string representation of the object
print(SyncEventSessionNextReasoningStarted.to_json())

# convert the object into a dict
sync_event_session_next_reasoning_started_dict = sync_event_session_next_reasoning_started_instance.to_dict()
# create an instance of SyncEventSessionNextReasoningStarted from a dict
sync_event_session_next_reasoning_started_from_dict = SyncEventSessionNextReasoningStarted.from_dict(sync_event_session_next_reasoning_started_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# SyncEventSessionNextToolInputEnded


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**sync_event** | [**SyncEventSessionNextToolInputEndedSyncEvent**](SyncEventSessionNextToolInputEndedSyncEvent.md) |  | 

## Example

```python
from opencode_sdk.models.sync_event_session_next_tool_input_ended import SyncEventSessionNextToolInputEnded

# TODO update the JSON string below
json = "{}"
# create an instance of SyncEventSessionNextToolInputEnded from a JSON string
sync_event_session_next_tool_input_ended_instance = SyncEventSessionNextToolInputEnded.from_json(json)
# print the JSON string representation of the object
print(SyncEventSessionNextToolInputEnded.to_json())

# convert the object into a dict
sync_event_session_next_tool_input_ended_dict = sync_event_session_next_tool_input_ended_instance.to_dict()
# create an instance of SyncEventSessionNextToolInputEnded from a dict
sync_event_session_next_tool_input_ended_from_dict = SyncEventSessionNextToolInputEnded.from_dict(sync_event_session_next_tool_input_ended_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



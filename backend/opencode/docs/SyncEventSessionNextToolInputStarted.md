# SyncEventSessionNextToolInputStarted


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**sync_event** | [**SyncEventSessionNextToolInputStartedSyncEvent**](SyncEventSessionNextToolInputStartedSyncEvent.md) |  | 

## Example

```python
from opencode_sdk.models.sync_event_session_next_tool_input_started import SyncEventSessionNextToolInputStarted

# TODO update the JSON string below
json = "{}"
# create an instance of SyncEventSessionNextToolInputStarted from a JSON string
sync_event_session_next_tool_input_started_instance = SyncEventSessionNextToolInputStarted.from_json(json)
# print the JSON string representation of the object
print(SyncEventSessionNextToolInputStarted.to_json())

# convert the object into a dict
sync_event_session_next_tool_input_started_dict = sync_event_session_next_tool_input_started_instance.to_dict()
# create an instance of SyncEventSessionNextToolInputStarted from a dict
sync_event_session_next_tool_input_started_from_dict = SyncEventSessionNextToolInputStarted.from_dict(sync_event_session_next_tool_input_started_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



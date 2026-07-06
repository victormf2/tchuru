# SyncEventSessionNextToolProgress


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**sync_event** | [**SyncEventSessionNextToolProgressSyncEvent**](SyncEventSessionNextToolProgressSyncEvent.md) |  | 

## Example

```python
from opencode_sdk.models.sync_event_session_next_tool_progress import SyncEventSessionNextToolProgress

# TODO update the JSON string below
json = "{}"
# create an instance of SyncEventSessionNextToolProgress from a JSON string
sync_event_session_next_tool_progress_instance = SyncEventSessionNextToolProgress.from_json(json)
# print the JSON string representation of the object
print(SyncEventSessionNextToolProgress.to_json())

# convert the object into a dict
sync_event_session_next_tool_progress_dict = sync_event_session_next_tool_progress_instance.to_dict()
# create an instance of SyncEventSessionNextToolProgress from a dict
sync_event_session_next_tool_progress_from_dict = SyncEventSessionNextToolProgress.from_dict(sync_event_session_next_tool_progress_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



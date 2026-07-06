# SyncEventSessionNextToolFailed


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**sync_event** | [**SyncEventSessionNextToolFailedSyncEvent**](SyncEventSessionNextToolFailedSyncEvent.md) |  | 

## Example

```python
from opencode_sdk.models.sync_event_session_next_tool_failed import SyncEventSessionNextToolFailed

# TODO update the JSON string below
json = "{}"
# create an instance of SyncEventSessionNextToolFailed from a JSON string
sync_event_session_next_tool_failed_instance = SyncEventSessionNextToolFailed.from_json(json)
# print the JSON string representation of the object
print(SyncEventSessionNextToolFailed.to_json())

# convert the object into a dict
sync_event_session_next_tool_failed_dict = sync_event_session_next_tool_failed_instance.to_dict()
# create an instance of SyncEventSessionNextToolFailed from a dict
sync_event_session_next_tool_failed_from_dict = SyncEventSessionNextToolFailed.from_dict(sync_event_session_next_tool_failed_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



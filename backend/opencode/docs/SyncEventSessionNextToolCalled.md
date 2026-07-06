# SyncEventSessionNextToolCalled


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**sync_event** | [**SyncEventSessionNextToolCalledSyncEvent**](SyncEventSessionNextToolCalledSyncEvent.md) |  | 

## Example

```python
from opencode_sdk.models.sync_event_session_next_tool_called import SyncEventSessionNextToolCalled

# TODO update the JSON string below
json = "{}"
# create an instance of SyncEventSessionNextToolCalled from a JSON string
sync_event_session_next_tool_called_instance = SyncEventSessionNextToolCalled.from_json(json)
# print the JSON string representation of the object
print(SyncEventSessionNextToolCalled.to_json())

# convert the object into a dict
sync_event_session_next_tool_called_dict = sync_event_session_next_tool_called_instance.to_dict()
# create an instance of SyncEventSessionNextToolCalled from a dict
sync_event_session_next_tool_called_from_dict = SyncEventSessionNextToolCalled.from_dict(sync_event_session_next_tool_called_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



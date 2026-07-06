# SyncEventSessionNextToolSuccess


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**sync_event** | [**SyncEventSessionNextToolSuccessSyncEvent**](SyncEventSessionNextToolSuccessSyncEvent.md) |  | 

## Example

```python
from opencode_sdk.models.sync_event_session_next_tool_success import SyncEventSessionNextToolSuccess

# TODO update the JSON string below
json = "{}"
# create an instance of SyncEventSessionNextToolSuccess from a JSON string
sync_event_session_next_tool_success_instance = SyncEventSessionNextToolSuccess.from_json(json)
# print the JSON string representation of the object
print(SyncEventSessionNextToolSuccess.to_json())

# convert the object into a dict
sync_event_session_next_tool_success_dict = sync_event_session_next_tool_success_instance.to_dict()
# create an instance of SyncEventSessionNextToolSuccess from a dict
sync_event_session_next_tool_success_from_dict = SyncEventSessionNextToolSuccess.from_dict(sync_event_session_next_tool_success_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



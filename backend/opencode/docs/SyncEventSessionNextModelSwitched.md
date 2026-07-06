# SyncEventSessionNextModelSwitched


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**sync_event** | [**SyncEventSessionNextModelSwitchedSyncEvent**](SyncEventSessionNextModelSwitchedSyncEvent.md) |  | 

## Example

```python
from opencode_sdk.models.sync_event_session_next_model_switched import SyncEventSessionNextModelSwitched

# TODO update the JSON string below
json = "{}"
# create an instance of SyncEventSessionNextModelSwitched from a JSON string
sync_event_session_next_model_switched_instance = SyncEventSessionNextModelSwitched.from_json(json)
# print the JSON string representation of the object
print(SyncEventSessionNextModelSwitched.to_json())

# convert the object into a dict
sync_event_session_next_model_switched_dict = sync_event_session_next_model_switched_instance.to_dict()
# create an instance of SyncEventSessionNextModelSwitched from a dict
sync_event_session_next_model_switched_from_dict = SyncEventSessionNextModelSwitched.from_dict(sync_event_session_next_model_switched_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



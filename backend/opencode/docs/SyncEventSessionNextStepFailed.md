# SyncEventSessionNextStepFailed


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**sync_event** | [**SyncEventSessionNextStepFailedSyncEvent**](SyncEventSessionNextStepFailedSyncEvent.md) |  | 

## Example

```python
from opencode_sdk.models.sync_event_session_next_step_failed import SyncEventSessionNextStepFailed

# TODO update the JSON string below
json = "{}"
# create an instance of SyncEventSessionNextStepFailed from a JSON string
sync_event_session_next_step_failed_instance = SyncEventSessionNextStepFailed.from_json(json)
# print the JSON string representation of the object
print(SyncEventSessionNextStepFailed.to_json())

# convert the object into a dict
sync_event_session_next_step_failed_dict = sync_event_session_next_step_failed_instance.to_dict()
# create an instance of SyncEventSessionNextStepFailed from a dict
sync_event_session_next_step_failed_from_dict = SyncEventSessionNextStepFailed.from_dict(sync_event_session_next_step_failed_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# SyncEventSessionNextPromptAdmitted


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**sync_event** | [**SyncEventSessionNextPromptAdmittedSyncEvent**](SyncEventSessionNextPromptAdmittedSyncEvent.md) |  | 

## Example

```python
from opencode_sdk.models.sync_event_session_next_prompt_admitted import SyncEventSessionNextPromptAdmitted

# TODO update the JSON string below
json = "{}"
# create an instance of SyncEventSessionNextPromptAdmitted from a JSON string
sync_event_session_next_prompt_admitted_instance = SyncEventSessionNextPromptAdmitted.from_json(json)
# print the JSON string representation of the object
print(SyncEventSessionNextPromptAdmitted.to_json())

# convert the object into a dict
sync_event_session_next_prompt_admitted_dict = sync_event_session_next_prompt_admitted_instance.to_dict()
# create an instance of SyncEventSessionNextPromptAdmitted from a dict
sync_event_session_next_prompt_admitted_from_dict = SyncEventSessionNextPromptAdmitted.from_dict(sync_event_session_next_prompt_admitted_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



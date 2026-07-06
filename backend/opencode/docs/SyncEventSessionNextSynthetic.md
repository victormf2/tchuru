# SyncEventSessionNextSynthetic


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**sync_event** | [**SyncEventSessionNextSyntheticSyncEvent**](SyncEventSessionNextSyntheticSyncEvent.md) |  | 

## Example

```python
from opencode_sdk.models.sync_event_session_next_synthetic import SyncEventSessionNextSynthetic

# TODO update the JSON string below
json = "{}"
# create an instance of SyncEventSessionNextSynthetic from a JSON string
sync_event_session_next_synthetic_instance = SyncEventSessionNextSynthetic.from_json(json)
# print the JSON string representation of the object
print(SyncEventSessionNextSynthetic.to_json())

# convert the object into a dict
sync_event_session_next_synthetic_dict = sync_event_session_next_synthetic_instance.to_dict()
# create an instance of SyncEventSessionNextSynthetic from a dict
sync_event_session_next_synthetic_from_dict = SyncEventSessionNextSynthetic.from_dict(sync_event_session_next_synthetic_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



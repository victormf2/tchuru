# SyncEventMessagePartRemoved


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**sync_event** | [**SyncEventMessagePartRemovedSyncEvent**](SyncEventMessagePartRemovedSyncEvent.md) |  | 

## Example

```python
from opencode_sdk.models.sync_event_message_part_removed import SyncEventMessagePartRemoved

# TODO update the JSON string below
json = "{}"
# create an instance of SyncEventMessagePartRemoved from a JSON string
sync_event_message_part_removed_instance = SyncEventMessagePartRemoved.from_json(json)
# print the JSON string representation of the object
print(SyncEventMessagePartRemoved.to_json())

# convert the object into a dict
sync_event_message_part_removed_dict = sync_event_message_part_removed_instance.to_dict()
# create an instance of SyncEventMessagePartRemoved from a dict
sync_event_message_part_removed_from_dict = SyncEventMessagePartRemoved.from_dict(sync_event_message_part_removed_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# SyncEventMessagePartUpdated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**sync_event** | [**SyncEventMessagePartUpdatedSyncEvent**](SyncEventMessagePartUpdatedSyncEvent.md) |  | 

## Example

```python
from opencode_sdk.models.sync_event_message_part_updated import SyncEventMessagePartUpdated

# TODO update the JSON string below
json = "{}"
# create an instance of SyncEventMessagePartUpdated from a JSON string
sync_event_message_part_updated_instance = SyncEventMessagePartUpdated.from_json(json)
# print the JSON string representation of the object
print(SyncEventMessagePartUpdated.to_json())

# convert the object into a dict
sync_event_message_part_updated_dict = sync_event_message_part_updated_instance.to_dict()
# create an instance of SyncEventMessagePartUpdated from a dict
sync_event_message_part_updated_from_dict = SyncEventMessagePartUpdated.from_dict(sync_event_message_part_updated_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



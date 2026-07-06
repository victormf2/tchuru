# SyncEventMessageUpdated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**sync_event** | [**SyncEventMessageUpdatedSyncEvent**](SyncEventMessageUpdatedSyncEvent.md) |  | 

## Example

```python
from opencode_sdk.models.sync_event_message_updated import SyncEventMessageUpdated

# TODO update the JSON string below
json = "{}"
# create an instance of SyncEventMessageUpdated from a JSON string
sync_event_message_updated_instance = SyncEventMessageUpdated.from_json(json)
# print the JSON string representation of the object
print(SyncEventMessageUpdated.to_json())

# convert the object into a dict
sync_event_message_updated_dict = sync_event_message_updated_instance.to_dict()
# create an instance of SyncEventMessageUpdated from a dict
sync_event_message_updated_from_dict = SyncEventMessageUpdated.from_dict(sync_event_message_updated_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



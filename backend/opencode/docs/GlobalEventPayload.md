# GlobalEventPayload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**EventServerInstanceDisposedProperties**](EventServerInstanceDisposedProperties.md) |  | 
**sync_event** | [**SyncEventSessionNextRevertCommittedSyncEvent**](SyncEventSessionNextRevertCommittedSyncEvent.md) |  | 

## Example

```python
from opencode_sdk.models.global_event_payload import GlobalEventPayload

# TODO update the JSON string below
json = "{}"
# create an instance of GlobalEventPayload from a JSON string
global_event_payload_instance = GlobalEventPayload.from_json(json)
# print the JSON string representation of the object
print(GlobalEventPayload.to_json())

# convert the object into a dict
global_event_payload_dict = global_event_payload_instance.to_dict()
# create an instance of GlobalEventPayload from a dict
global_event_payload_from_dict = GlobalEventPayload.from_dict(global_event_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



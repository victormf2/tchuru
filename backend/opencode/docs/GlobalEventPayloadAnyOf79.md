# GlobalEventPayloadAnyOf79


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**SyncStealRequest**](SyncStealRequest.md) |  | 

## Example

```python
from opencode_sdk.models.global_event_payload_any_of79 import GlobalEventPayloadAnyOf79

# TODO update the JSON string below
json = "{}"
# create an instance of GlobalEventPayloadAnyOf79 from a JSON string
global_event_payload_any_of79_instance = GlobalEventPayloadAnyOf79.from_json(json)
# print the JSON string representation of the object
print(GlobalEventPayloadAnyOf79.to_json())

# convert the object into a dict
global_event_payload_any_of79_dict = global_event_payload_any_of79_instance.to_dict()
# create an instance of GlobalEventPayloadAnyOf79 from a dict
global_event_payload_any_of79_from_dict = GlobalEventPayloadAnyOf79.from_dict(global_event_payload_any_of79_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



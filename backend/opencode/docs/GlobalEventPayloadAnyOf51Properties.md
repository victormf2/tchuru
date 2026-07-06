# GlobalEventPayloadAnyOf51Properties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**session_id** | **str** |  | 
**request_id** | **str** |  | 
**reply** | [**PermissionV2Reply**](PermissionV2Reply.md) |  | 

## Example

```python
from opencode_sdk.models.global_event_payload_any_of51_properties import GlobalEventPayloadAnyOf51Properties

# TODO update the JSON string below
json = "{}"
# create an instance of GlobalEventPayloadAnyOf51Properties from a JSON string
global_event_payload_any_of51_properties_instance = GlobalEventPayloadAnyOf51Properties.from_json(json)
# print the JSON string representation of the object
print(GlobalEventPayloadAnyOf51Properties.to_json())

# convert the object into a dict
global_event_payload_any_of51_properties_dict = global_event_payload_any_of51_properties_instance.to_dict()
# create an instance of GlobalEventPayloadAnyOf51Properties from a dict
global_event_payload_any_of51_properties_from_dict = GlobalEventPayloadAnyOf51Properties.from_dict(global_event_payload_any_of51_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



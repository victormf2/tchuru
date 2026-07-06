# GlobalEventPayloadAnyOf13Properties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timestamp** | **float** |  | 
**session_id** | **str** |  | 
**location** | [**LocationRef**](LocationRef.md) |  | 
**subdirectory** | **str** |  | [optional] 

## Example

```python
from opencode_sdk.models.global_event_payload_any_of13_properties import GlobalEventPayloadAnyOf13Properties

# TODO update the JSON string below
json = "{}"
# create an instance of GlobalEventPayloadAnyOf13Properties from a JSON string
global_event_payload_any_of13_properties_instance = GlobalEventPayloadAnyOf13Properties.from_json(json)
# print the JSON string representation of the object
print(GlobalEventPayloadAnyOf13Properties.to_json())

# convert the object into a dict
global_event_payload_any_of13_properties_dict = global_event_payload_any_of13_properties_instance.to_dict()
# create an instance of GlobalEventPayloadAnyOf13Properties from a dict
global_event_payload_any_of13_properties_from_dict = GlobalEventPayloadAnyOf13Properties.from_dict(global_event_payload_any_of13_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



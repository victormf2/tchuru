# GlobalEventPayloadAnyOf28Properties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timestamp** | **float** |  | 
**session_id** | **str** |  | 
**assistant_message_id** | **str** |  | 
**reasoning_id** | **str** |  | 
**text** | **str** |  | 
**provider_metadata** | **Dict[str, object]** |  | [optional] 

## Example

```python
from opencode_sdk.models.global_event_payload_any_of28_properties import GlobalEventPayloadAnyOf28Properties

# TODO update the JSON string below
json = "{}"
# create an instance of GlobalEventPayloadAnyOf28Properties from a JSON string
global_event_payload_any_of28_properties_instance = GlobalEventPayloadAnyOf28Properties.from_json(json)
# print the JSON string representation of the object
print(GlobalEventPayloadAnyOf28Properties.to_json())

# convert the object into a dict
global_event_payload_any_of28_properties_dict = global_event_payload_any_of28_properties_instance.to_dict()
# create an instance of GlobalEventPayloadAnyOf28Properties from a dict
global_event_payload_any_of28_properties_from_dict = GlobalEventPayloadAnyOf28Properties.from_dict(global_event_payload_any_of28_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



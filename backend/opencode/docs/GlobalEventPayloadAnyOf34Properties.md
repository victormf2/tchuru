# GlobalEventPayloadAnyOf34Properties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timestamp** | **float** |  | 
**session_id** | **str** |  | 
**assistant_message_id** | **str** |  | 
**call_id** | **str** |  | 
**structured** | **object** |  | 
**content** | [**List[LLMToolContent]**](LLMToolContent.md) |  | 
**output_paths** | **List[str]** |  | [optional] 
**result** | **object** |  | [optional] 
**provider** | [**GlobalEventPayloadAnyOf32PropertiesProvider**](GlobalEventPayloadAnyOf32PropertiesProvider.md) |  | 

## Example

```python
from opencode_sdk.models.global_event_payload_any_of34_properties import GlobalEventPayloadAnyOf34Properties

# TODO update the JSON string below
json = "{}"
# create an instance of GlobalEventPayloadAnyOf34Properties from a JSON string
global_event_payload_any_of34_properties_instance = GlobalEventPayloadAnyOf34Properties.from_json(json)
# print the JSON string representation of the object
print(GlobalEventPayloadAnyOf34Properties.to_json())

# convert the object into a dict
global_event_payload_any_of34_properties_dict = global_event_payload_any_of34_properties_instance.to_dict()
# create an instance of GlobalEventPayloadAnyOf34Properties from a dict
global_event_payload_any_of34_properties_from_dict = GlobalEventPayloadAnyOf34Properties.from_dict(global_event_payload_any_of34_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



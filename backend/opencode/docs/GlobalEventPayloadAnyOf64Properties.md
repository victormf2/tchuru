# GlobalEventPayloadAnyOf64Properties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**session_id** | **str** |  | 
**permission** | **str** |  | 
**patterns** | **List[str]** |  | 
**metadata** | **object** |  | 
**always** | **List[str]** |  | 
**tool** | [**GlobalEventPayloadAnyOf64PropertiesTool**](GlobalEventPayloadAnyOf64PropertiesTool.md) |  | [optional] 

## Example

```python
from opencode_sdk.models.global_event_payload_any_of64_properties import GlobalEventPayloadAnyOf64Properties

# TODO update the JSON string below
json = "{}"
# create an instance of GlobalEventPayloadAnyOf64Properties from a JSON string
global_event_payload_any_of64_properties_instance = GlobalEventPayloadAnyOf64Properties.from_json(json)
# print the JSON string representation of the object
print(GlobalEventPayloadAnyOf64Properties.to_json())

# convert the object into a dict
global_event_payload_any_of64_properties_dict = global_event_payload_any_of64_properties_instance.to_dict()
# create an instance of GlobalEventPayloadAnyOf64Properties from a dict
global_event_payload_any_of64_properties_from_dict = GlobalEventPayloadAnyOf64Properties.from_dict(global_event_payload_any_of64_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



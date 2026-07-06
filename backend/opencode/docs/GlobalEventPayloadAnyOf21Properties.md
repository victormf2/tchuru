# GlobalEventPayloadAnyOf21Properties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timestamp** | **float** |  | 
**session_id** | **str** |  | 
**assistant_message_id** | **str** |  | 
**finish** | **str** |  | 
**cost** | **float** |  | 
**tokens** | [**SessionTokens**](SessionTokens.md) |  | 
**snapshot** | **str** |  | [optional] 
**files** | **List[str]** |  | [optional] 

## Example

```python
from opencode_sdk.models.global_event_payload_any_of21_properties import GlobalEventPayloadAnyOf21Properties

# TODO update the JSON string below
json = "{}"
# create an instance of GlobalEventPayloadAnyOf21Properties from a JSON string
global_event_payload_any_of21_properties_instance = GlobalEventPayloadAnyOf21Properties.from_json(json)
# print the JSON string representation of the object
print(GlobalEventPayloadAnyOf21Properties.to_json())

# convert the object into a dict
global_event_payload_any_of21_properties_dict = global_event_payload_any_of21_properties_instance.to_dict()
# create an instance of GlobalEventPayloadAnyOf21Properties from a dict
global_event_payload_any_of21_properties_from_dict = GlobalEventPayloadAnyOf21Properties.from_dict(global_event_payload_any_of21_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



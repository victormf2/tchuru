# GlobalEventPayloadAnyOf20Properties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timestamp** | **float** |  | 
**session_id** | **str** |  | 
**assistant_message_id** | **str** |  | 
**agent** | **str** |  | 
**model** | [**ModelRef**](ModelRef.md) |  | 
**snapshot** | **str** |  | [optional] 

## Example

```python
from opencode_sdk.models.global_event_payload_any_of20_properties import GlobalEventPayloadAnyOf20Properties

# TODO update the JSON string below
json = "{}"
# create an instance of GlobalEventPayloadAnyOf20Properties from a JSON string
global_event_payload_any_of20_properties_instance = GlobalEventPayloadAnyOf20Properties.from_json(json)
# print the JSON string representation of the object
print(GlobalEventPayloadAnyOf20Properties.to_json())

# convert the object into a dict
global_event_payload_any_of20_properties_dict = global_event_payload_any_of20_properties_instance.to_dict()
# create an instance of GlobalEventPayloadAnyOf20Properties from a dict
global_event_payload_any_of20_properties_from_dict = GlobalEventPayloadAnyOf20Properties.from_dict(global_event_payload_any_of20_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



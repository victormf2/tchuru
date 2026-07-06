# GlobalEventPayloadAnyOf50Properties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**session_id** | **str** |  | 
**action** | **str** |  | 
**resources** | **List[str]** |  | 
**save** | **List[str]** |  | [optional] 
**metadata** | **object** |  | [optional] 
**source** | [**PermissionV2Source**](PermissionV2Source.md) |  | [optional] 

## Example

```python
from opencode_sdk.models.global_event_payload_any_of50_properties import GlobalEventPayloadAnyOf50Properties

# TODO update the JSON string below
json = "{}"
# create an instance of GlobalEventPayloadAnyOf50Properties from a JSON string
global_event_payload_any_of50_properties_instance = GlobalEventPayloadAnyOf50Properties.from_json(json)
# print the JSON string representation of the object
print(GlobalEventPayloadAnyOf50Properties.to_json())

# convert the object into a dict
global_event_payload_any_of50_properties_dict = global_event_payload_any_of50_properties_instance.to_dict()
# create an instance of GlobalEventPayloadAnyOf50Properties from a dict
global_event_payload_any_of50_properties_from_dict = GlobalEventPayloadAnyOf50Properties.from_dict(global_event_payload_any_of50_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



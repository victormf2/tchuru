# GlobalEventPayloadAnyOf76Properties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**session_id** | **str** |  | 
**questions** | [**List[QuestionInfo]**](QuestionInfo.md) | Questions to ask | 
**tool** | [**QuestionTool**](QuestionTool.md) |  | [optional] 

## Example

```python
from opencode_sdk.models.global_event_payload_any_of76_properties import GlobalEventPayloadAnyOf76Properties

# TODO update the JSON string below
json = "{}"
# create an instance of GlobalEventPayloadAnyOf76Properties from a JSON string
global_event_payload_any_of76_properties_instance = GlobalEventPayloadAnyOf76Properties.from_json(json)
# print the JSON string representation of the object
print(GlobalEventPayloadAnyOf76Properties.to_json())

# convert the object into a dict
global_event_payload_any_of76_properties_dict = global_event_payload_any_of76_properties_instance.to_dict()
# create an instance of GlobalEventPayloadAnyOf76Properties from a dict
global_event_payload_any_of76_properties_from_dict = GlobalEventPayloadAnyOf76Properties.from_dict(global_event_payload_any_of76_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



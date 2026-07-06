# GlobalEventPayloadAnyOf59Properties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**session_id** | **str** |  | 
**questions** | [**List[QuestionV2Info]**](QuestionV2Info.md) | Questions to ask | 
**tool** | [**QuestionV2Tool**](QuestionV2Tool.md) |  | [optional] 

## Example

```python
from opencode_sdk.models.global_event_payload_any_of59_properties import GlobalEventPayloadAnyOf59Properties

# TODO update the JSON string below
json = "{}"
# create an instance of GlobalEventPayloadAnyOf59Properties from a JSON string
global_event_payload_any_of59_properties_instance = GlobalEventPayloadAnyOf59Properties.from_json(json)
# print the JSON string representation of the object
print(GlobalEventPayloadAnyOf59Properties.to_json())

# convert the object into a dict
global_event_payload_any_of59_properties_dict = global_event_payload_any_of59_properties_instance.to_dict()
# create an instance of GlobalEventPayloadAnyOf59Properties from a dict
global_event_payload_any_of59_properties_from_dict = GlobalEventPayloadAnyOf59Properties.from_dict(global_event_payload_any_of59_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



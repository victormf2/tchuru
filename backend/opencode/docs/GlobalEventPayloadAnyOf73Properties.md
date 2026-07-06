# GlobalEventPayloadAnyOf73Properties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**worktree** | **str** |  | 
**vcs** | [**ProjectVcs**](ProjectVcs.md) |  | [optional] 
**name** | **str** |  | [optional] 
**icon** | [**ProjectIcon**](ProjectIcon.md) |  | [optional] 
**commands** | [**ProjectCommands**](ProjectCommands.md) |  | [optional] 
**time** | [**ProjectTime**](ProjectTime.md) |  | 
**sandboxes** | **List[str]** |  | 

## Example

```python
from opencode_sdk.models.global_event_payload_any_of73_properties import GlobalEventPayloadAnyOf73Properties

# TODO update the JSON string below
json = "{}"
# create an instance of GlobalEventPayloadAnyOf73Properties from a JSON string
global_event_payload_any_of73_properties_instance = GlobalEventPayloadAnyOf73Properties.from_json(json)
# print the JSON string representation of the object
print(GlobalEventPayloadAnyOf73Properties.to_json())

# convert the object into a dict
global_event_payload_any_of73_properties_dict = global_event_payload_any_of73_properties_instance.to_dict()
# create an instance of GlobalEventPayloadAnyOf73Properties from a dict
global_event_payload_any_of73_properties_from_dict = GlobalEventPayloadAnyOf73Properties.from_dict(global_event_payload_any_of73_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



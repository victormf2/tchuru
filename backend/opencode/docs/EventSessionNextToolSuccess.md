# EventSessionNextToolSuccess


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf34Properties**](GlobalEventPayloadAnyOf34Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_session_next_tool_success import EventSessionNextToolSuccess

# TODO update the JSON string below
json = "{}"
# create an instance of EventSessionNextToolSuccess from a JSON string
event_session_next_tool_success_instance = EventSessionNextToolSuccess.from_json(json)
# print the JSON string representation of the object
print(EventSessionNextToolSuccess.to_json())

# convert the object into a dict
event_session_next_tool_success_dict = event_session_next_tool_success_instance.to_dict()
# create an instance of EventSessionNextToolSuccess from a dict
event_session_next_tool_success_from_dict = EventSessionNextToolSuccess.from_dict(event_session_next_tool_success_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



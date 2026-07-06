# EventSessionNextToolInputDelta


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf30Properties**](GlobalEventPayloadAnyOf30Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_session_next_tool_input_delta import EventSessionNextToolInputDelta

# TODO update the JSON string below
json = "{}"
# create an instance of EventSessionNextToolInputDelta from a JSON string
event_session_next_tool_input_delta_instance = EventSessionNextToolInputDelta.from_json(json)
# print the JSON string representation of the object
print(EventSessionNextToolInputDelta.to_json())

# convert the object into a dict
event_session_next_tool_input_delta_dict = event_session_next_tool_input_delta_instance.to_dict()
# create an instance of EventSessionNextToolInputDelta from a dict
event_session_next_tool_input_delta_from_dict = EventSessionNextToolInputDelta.from_dict(event_session_next_tool_input_delta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



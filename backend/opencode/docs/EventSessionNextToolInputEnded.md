# EventSessionNextToolInputEnded


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf31Properties**](GlobalEventPayloadAnyOf31Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_session_next_tool_input_ended import EventSessionNextToolInputEnded

# TODO update the JSON string below
json = "{}"
# create an instance of EventSessionNextToolInputEnded from a JSON string
event_session_next_tool_input_ended_instance = EventSessionNextToolInputEnded.from_json(json)
# print the JSON string representation of the object
print(EventSessionNextToolInputEnded.to_json())

# convert the object into a dict
event_session_next_tool_input_ended_dict = event_session_next_tool_input_ended_instance.to_dict()
# create an instance of EventSessionNextToolInputEnded from a dict
event_session_next_tool_input_ended_from_dict = EventSessionNextToolInputEnded.from_dict(event_session_next_tool_input_ended_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# EventSessionNextToolInputStarted


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf29Properties**](GlobalEventPayloadAnyOf29Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_session_next_tool_input_started import EventSessionNextToolInputStarted

# TODO update the JSON string below
json = "{}"
# create an instance of EventSessionNextToolInputStarted from a JSON string
event_session_next_tool_input_started_instance = EventSessionNextToolInputStarted.from_json(json)
# print the JSON string representation of the object
print(EventSessionNextToolInputStarted.to_json())

# convert the object into a dict
event_session_next_tool_input_started_dict = event_session_next_tool_input_started_instance.to_dict()
# create an instance of EventSessionNextToolInputStarted from a dict
event_session_next_tool_input_started_from_dict = EventSessionNextToolInputStarted.from_dict(event_session_next_tool_input_started_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



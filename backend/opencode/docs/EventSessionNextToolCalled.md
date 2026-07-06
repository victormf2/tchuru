# EventSessionNextToolCalled


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf32Properties**](GlobalEventPayloadAnyOf32Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_session_next_tool_called import EventSessionNextToolCalled

# TODO update the JSON string below
json = "{}"
# create an instance of EventSessionNextToolCalled from a JSON string
event_session_next_tool_called_instance = EventSessionNextToolCalled.from_json(json)
# print the JSON string representation of the object
print(EventSessionNextToolCalled.to_json())

# convert the object into a dict
event_session_next_tool_called_dict = event_session_next_tool_called_instance.to_dict()
# create an instance of EventSessionNextToolCalled from a dict
event_session_next_tool_called_from_dict = EventSessionNextToolCalled.from_dict(event_session_next_tool_called_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



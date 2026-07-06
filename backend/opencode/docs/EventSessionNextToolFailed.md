# EventSessionNextToolFailed


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf35Properties**](GlobalEventPayloadAnyOf35Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_session_next_tool_failed import EventSessionNextToolFailed

# TODO update the JSON string below
json = "{}"
# create an instance of EventSessionNextToolFailed from a JSON string
event_session_next_tool_failed_instance = EventSessionNextToolFailed.from_json(json)
# print the JSON string representation of the object
print(EventSessionNextToolFailed.to_json())

# convert the object into a dict
event_session_next_tool_failed_dict = event_session_next_tool_failed_instance.to_dict()
# create an instance of EventSessionNextToolFailed from a dict
event_session_next_tool_failed_from_dict = EventSessionNextToolFailed.from_dict(event_session_next_tool_failed_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



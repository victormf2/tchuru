# EventSessionNextShellEnded


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf19Properties**](GlobalEventPayloadAnyOf19Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_session_next_shell_ended import EventSessionNextShellEnded

# TODO update the JSON string below
json = "{}"
# create an instance of EventSessionNextShellEnded from a JSON string
event_session_next_shell_ended_instance = EventSessionNextShellEnded.from_json(json)
# print the JSON string representation of the object
print(EventSessionNextShellEnded.to_json())

# convert the object into a dict
event_session_next_shell_ended_dict = event_session_next_shell_ended_instance.to_dict()
# create an instance of EventSessionNextShellEnded from a dict
event_session_next_shell_ended_from_dict = EventSessionNextShellEnded.from_dict(event_session_next_shell_ended_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



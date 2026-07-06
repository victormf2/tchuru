# EventSessionNextShellStarted


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf18Properties**](GlobalEventPayloadAnyOf18Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_session_next_shell_started import EventSessionNextShellStarted

# TODO update the JSON string below
json = "{}"
# create an instance of EventSessionNextShellStarted from a JSON string
event_session_next_shell_started_instance = EventSessionNextShellStarted.from_json(json)
# print the JSON string representation of the object
print(EventSessionNextShellStarted.to_json())

# convert the object into a dict
event_session_next_shell_started_dict = event_session_next_shell_started_instance.to_dict()
# create an instance of EventSessionNextShellStarted from a dict
event_session_next_shell_started_from_dict = EventSessionNextShellStarted.from_dict(event_session_next_shell_started_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# EventTuiCommandExecute


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf67Properties**](GlobalEventPayloadAnyOf67Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_tui_command_execute import EventTuiCommandExecute

# TODO update the JSON string below
json = "{}"
# create an instance of EventTuiCommandExecute from a JSON string
event_tui_command_execute_instance = EventTuiCommandExecute.from_json(json)
# print the JSON string representation of the object
print(EventTuiCommandExecute.to_json())

# convert the object into a dict
event_tui_command_execute_dict = event_tui_command_execute_instance.to_dict()
# create an instance of EventTuiCommandExecute from a dict
event_tui_command_execute_from_dict = EventTuiCommandExecute.from_dict(event_tui_command_execute_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



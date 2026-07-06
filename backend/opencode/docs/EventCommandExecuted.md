# EventCommandExecuted


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf72Properties**](GlobalEventPayloadAnyOf72Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_command_executed import EventCommandExecuted

# TODO update the JSON string below
json = "{}"
# create an instance of EventCommandExecuted from a JSON string
event_command_executed_instance = EventCommandExecuted.from_json(json)
# print the JSON string representation of the object
print(EventCommandExecuted.to_json())

# convert the object into a dict
event_command_executed_dict = event_command_executed_instance.to_dict()
# create an instance of EventCommandExecuted from a dict
event_command_executed_from_dict = EventCommandExecuted.from_dict(event_command_executed_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



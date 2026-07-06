# TuiCommandExecute


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**GlobalEventPayloadAnyOf67Properties**](GlobalEventPayloadAnyOf67Properties.md) |  | 

## Example

```python
from opencode_sdk.models.tui_command_execute import TuiCommandExecute

# TODO update the JSON string below
json = "{}"
# create an instance of TuiCommandExecute from a JSON string
tui_command_execute_instance = TuiCommandExecute.from_json(json)
# print the JSON string representation of the object
print(TuiCommandExecute.to_json())

# convert the object into a dict
tui_command_execute_dict = tui_command_execute_instance.to_dict()
# create an instance of TuiCommandExecute from a dict
tui_command_execute_from_dict = TuiCommandExecute.from_dict(tui_command_execute_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# CommandExecuted


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**GlobalEventPayloadAnyOf72Properties**](GlobalEventPayloadAnyOf72Properties.md) |  | 

## Example

```python
from opencode_sdk.models.command_executed import CommandExecuted

# TODO update the JSON string below
json = "{}"
# create an instance of CommandExecuted from a JSON string
command_executed_instance = CommandExecuted.from_json(json)
# print the JSON string representation of the object
print(CommandExecuted.to_json())

# convert the object into a dict
command_executed_dict = command_executed_instance.to_dict()
# create an instance of CommandExecuted from a dict
command_executed_from_dict = CommandExecuted.from_dict(command_executed_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# SessionNextShellEnded


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**GlobalEventPayloadAnyOf19Properties**](GlobalEventPayloadAnyOf19Properties.md) |  | 

## Example

```python
from opencode_sdk.models.session_next_shell_ended import SessionNextShellEnded

# TODO update the JSON string below
json = "{}"
# create an instance of SessionNextShellEnded from a JSON string
session_next_shell_ended_instance = SessionNextShellEnded.from_json(json)
# print the JSON string representation of the object
print(SessionNextShellEnded.to_json())

# convert the object into a dict
session_next_shell_ended_dict = session_next_shell_ended_instance.to_dict()
# create an instance of SessionNextShellEnded from a dict
session_next_shell_ended_from_dict = SessionNextShellEnded.from_dict(session_next_shell_ended_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



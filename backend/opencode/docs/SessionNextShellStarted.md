# SessionNextShellStarted


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**GlobalEventPayloadAnyOf18Properties**](GlobalEventPayloadAnyOf18Properties.md) |  | 

## Example

```python
from opencode_sdk.models.session_next_shell_started import SessionNextShellStarted

# TODO update the JSON string below
json = "{}"
# create an instance of SessionNextShellStarted from a JSON string
session_next_shell_started_instance = SessionNextShellStarted.from_json(json)
# print the JSON string representation of the object
print(SessionNextShellStarted.to_json())

# convert the object into a dict
session_next_shell_started_dict = session_next_shell_started_instance.to_dict()
# create an instance of SessionNextShellStarted from a dict
session_next_shell_started_from_dict = SessionNextShellStarted.from_dict(session_next_shell_started_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



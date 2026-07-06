# SessionMessageShell


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**time** | [**SessionMessageShellTime**](SessionMessageShellTime.md) |  | 
**type** | **str** |  | 
**call_id** | **str** |  | 
**command** | **str** |  | 
**output** | **str** |  | 

## Example

```python
from opencode_sdk.models.session_message_shell import SessionMessageShell

# TODO update the JSON string below
json = "{}"
# create an instance of SessionMessageShell from a JSON string
session_message_shell_instance = SessionMessageShell.from_json(json)
# print the JSON string representation of the object
print(SessionMessageShell.to_json())

# convert the object into a dict
session_message_shell_dict = session_message_shell_instance.to_dict()
# create an instance of SessionMessageShell from a dict
session_message_shell_from_dict = SessionMessageShell.from_dict(session_message_shell_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



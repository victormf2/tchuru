# SessionMessageSystem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**time** | [**SessionMessageAgentSwitchedTime**](SessionMessageAgentSwitchedTime.md) |  | 
**type** | **str** |  | 
**text** | **str** |  | 

## Example

```python
from opencode_sdk.models.session_message_system import SessionMessageSystem

# TODO update the JSON string below
json = "{}"
# create an instance of SessionMessageSystem from a JSON string
session_message_system_instance = SessionMessageSystem.from_json(json)
# print the JSON string representation of the object
print(SessionMessageSystem.to_json())

# convert the object into a dict
session_message_system_dict = session_message_system_instance.to_dict()
# create an instance of SessionMessageSystem from a dict
session_message_system_from_dict = SessionMessageSystem.from_dict(session_message_system_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



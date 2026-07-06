# SessionMessageAgentSwitched


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**time** | [**SessionMessageAgentSwitchedTime**](SessionMessageAgentSwitchedTime.md) |  | 
**type** | **str** |  | 
**agent** | **str** |  | 

## Example

```python
from opencode_sdk.models.session_message_agent_switched import SessionMessageAgentSwitched

# TODO update the JSON string below
json = "{}"
# create an instance of SessionMessageAgentSwitched from a JSON string
session_message_agent_switched_instance = SessionMessageAgentSwitched.from_json(json)
# print the JSON string representation of the object
print(SessionMessageAgentSwitched.to_json())

# convert the object into a dict
session_message_agent_switched_dict = session_message_agent_switched_instance.to_dict()
# create an instance of SessionMessageAgentSwitched from a dict
session_message_agent_switched_from_dict = SessionMessageAgentSwitched.from_dict(session_message_agent_switched_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



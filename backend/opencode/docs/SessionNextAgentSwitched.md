# SessionNextAgentSwitched


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**GlobalEventPayloadAnyOf11Properties**](GlobalEventPayloadAnyOf11Properties.md) |  | 

## Example

```python
from opencode_sdk.models.session_next_agent_switched import SessionNextAgentSwitched

# TODO update the JSON string below
json = "{}"
# create an instance of SessionNextAgentSwitched from a JSON string
session_next_agent_switched_instance = SessionNextAgentSwitched.from_json(json)
# print the JSON string representation of the object
print(SessionNextAgentSwitched.to_json())

# convert the object into a dict
session_next_agent_switched_dict = session_next_agent_switched_instance.to_dict()
# create an instance of SessionNextAgentSwitched from a dict
session_next_agent_switched_from_dict = SessionNextAgentSwitched.from_dict(session_next_agent_switched_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



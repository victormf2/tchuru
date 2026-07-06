# EventSessionNextAgentSwitched


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf11Properties**](GlobalEventPayloadAnyOf11Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_session_next_agent_switched import EventSessionNextAgentSwitched

# TODO update the JSON string below
json = "{}"
# create an instance of EventSessionNextAgentSwitched from a JSON string
event_session_next_agent_switched_instance = EventSessionNextAgentSwitched.from_json(json)
# print the JSON string representation of the object
print(EventSessionNextAgentSwitched.to_json())

# convert the object into a dict
event_session_next_agent_switched_dict = event_session_next_agent_switched_instance.to_dict()
# create an instance of EventSessionNextAgentSwitched from a dict
event_session_next_agent_switched_from_dict = EventSessionNextAgentSwitched.from_dict(event_session_next_agent_switched_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



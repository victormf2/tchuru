# V2SessionSwitchAgentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent** | **str** |  | 

## Example

```python
from opencode_sdk.models.v2_session_switch_agent_request import V2SessionSwitchAgentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of V2SessionSwitchAgentRequest from a JSON string
v2_session_switch_agent_request_instance = V2SessionSwitchAgentRequest.from_json(json)
# print the JSON string representation of the object
print(V2SessionSwitchAgentRequest.to_json())

# convert the object into a dict
v2_session_switch_agent_request_dict = v2_session_switch_agent_request_instance.to_dict()
# create an instance of V2SessionSwitchAgentRequest from a dict
v2_session_switch_agent_request_from_dict = V2SessionSwitchAgentRequest.from_dict(v2_session_switch_agent_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



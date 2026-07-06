# V2AgentList200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | [**LocationInfo**](LocationInfo.md) |  | 
**data** | [**List[AgentV2Info]**](AgentV2Info.md) |  | 

## Example

```python
from opencode_sdk.models.v2_agent_list200_response import V2AgentList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of V2AgentList200Response from a JSON string
v2_agent_list200_response_instance = V2AgentList200Response.from_json(json)
# print the JSON string representation of the object
print(V2AgentList200Response.to_json())

# convert the object into a dict
v2_agent_list200_response_dict = v2_agent_list200_response_instance.to_dict()
# create an instance of V2AgentList200Response from a dict
v2_agent_list200_response_from_dict = V2AgentList200Response.from_dict(v2_agent_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



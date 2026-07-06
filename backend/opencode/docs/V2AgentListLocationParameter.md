# V2AgentListLocationParameter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**directory** | **str** |  | [optional] 
**workspace** | **str** |  | [optional] 

## Example

```python
from opencode_sdk.models.v2_agent_list_location_parameter import V2AgentListLocationParameter

# TODO update the JSON string below
json = "{}"
# create an instance of V2AgentListLocationParameter from a JSON string
v2_agent_list_location_parameter_instance = V2AgentListLocationParameter.from_json(json)
# print the JSON string representation of the object
print(V2AgentListLocationParameter.to_json())

# convert the object into a dict
v2_agent_list_location_parameter_dict = v2_agent_list_location_parameter_instance.to_dict()
# create an instance of V2AgentListLocationParameter from a dict
v2_agent_list_location_parameter_from_dict = V2AgentListLocationParameter.from_dict(v2_agent_list_location_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



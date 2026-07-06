# AgentConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model** | **str** |  | [optional] 
**variant** | **str** |  | [optional] 
**temperature** | **float** |  | [optional] 
**top_p** | **float** |  | [optional] 
**prompt** | **str** |  | [optional] 
**tools** | **Dict[str, bool]** |  | [optional] 
**disable** | **bool** |  | [optional] 
**description** | **str** |  | [optional] 
**mode** | **str** |  | [optional] 
**hidden** | **bool** |  | [optional] 
**options** | **object** |  | [optional] 
**color** | [**AgentConfigColor**](AgentConfigColor.md) |  | [optional] 
**steps** | **int** |  | [optional] 
**max_steps** | **int** |  | [optional] 
**permission** | [**PermissionConfig**](PermissionConfig.md) |  | [optional] 

## Example

```python
from opencode_sdk.models.agent_config import AgentConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AgentConfig from a JSON string
agent_config_instance = AgentConfig.from_json(json)
# print the JSON string representation of the object
print(AgentConfig.to_json())

# convert the object into a dict
agent_config_dict = agent_config_instance.to_dict()
# create an instance of AgentConfig from a dict
agent_config_from_dict = AgentConfig.from_dict(agent_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



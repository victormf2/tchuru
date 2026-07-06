# ConfigAgent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**plan** | [**AgentConfig**](AgentConfig.md) |  | [optional] 
**build** | [**AgentConfig**](AgentConfig.md) |  | [optional] 
**general** | [**AgentConfig**](AgentConfig.md) |  | [optional] 
**explore** | [**AgentConfig**](AgentConfig.md) |  | [optional] 
**title** | [**AgentConfig**](AgentConfig.md) |  | [optional] 
**summary** | [**AgentConfig**](AgentConfig.md) |  | [optional] 
**compaction** | [**AgentConfig**](AgentConfig.md) |  | [optional] 

## Example

```python
from opencode_sdk.models.config_agent import ConfigAgent

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigAgent from a JSON string
config_agent_instance = ConfigAgent.from_json(json)
# print the JSON string representation of the object
print(ConfigAgent.to_json())

# convert the object into a dict
config_agent_dict = config_agent_instance.to_dict()
# create an instance of ConfigAgent from a dict
config_agent_from_dict = ConfigAgent.from_dict(config_agent_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# AgentPartInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**type** | **str** |  | 
**name** | **str** |  | 
**source** | [**AgentPartSource**](AgentPartSource.md) |  | [optional] 

## Example

```python
from opencode_sdk.models.agent_part_input import AgentPartInput

# TODO update the JSON string below
json = "{}"
# create an instance of AgentPartInput from a JSON string
agent_part_input_instance = AgentPartInput.from_json(json)
# print the JSON string representation of the object
print(AgentPartInput.to_json())

# convert the object into a dict
agent_part_input_dict = agent_part_input_instance.to_dict()
# create an instance of AgentPartInput from a dict
agent_part_input_from_dict = AgentPartInput.from_dict(agent_part_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



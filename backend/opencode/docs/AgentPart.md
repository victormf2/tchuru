# AgentPart


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**session_id** | **str** |  | 
**message_id** | **str** |  | 
**type** | **str** |  | 
**name** | **str** |  | 
**source** | [**AgentPartSource**](AgentPartSource.md) |  | [optional] 

## Example

```python
from opencode_sdk.models.agent_part import AgentPart

# TODO update the JSON string below
json = "{}"
# create an instance of AgentPart from a JSON string
agent_part_instance = AgentPart.from_json(json)
# print the JSON string representation of the object
print(AgentPart.to_json())

# convert the object into a dict
agent_part_dict = agent_part_instance.to_dict()
# create an instance of AgentPart from a dict
agent_part_from_dict = AgentPart.from_dict(agent_part_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



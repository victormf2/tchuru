# Agent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**description** | **str** |  | [optional] 
**mode** | **str** |  | 
**native** | **bool** |  | [optional] 
**hidden** | **bool** |  | [optional] 
**top_p** | **float** |  | [optional] 
**temperature** | **float** |  | [optional] 
**color** | **str** |  | [optional] 
**permission** | [**List[PermissionRule]**](PermissionRule.md) |  | 
**model** | [**SessionPromptAsyncRequestModel**](SessionPromptAsyncRequestModel.md) |  | [optional] 
**variant** | **str** |  | [optional] 
**prompt** | **str** |  | [optional] 
**options** | **object** |  | 
**steps** | **float** |  | [optional] 

## Example

```python
from opencode_sdk.models.agent import Agent

# TODO update the JSON string below
json = "{}"
# create an instance of Agent from a JSON string
agent_instance = Agent.from_json(json)
# print the JSON string representation of the object
print(Agent.to_json())

# convert the object into a dict
agent_dict = agent_instance.to_dict()
# create an instance of Agent from a dict
agent_from_dict = Agent.from_dict(agent_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



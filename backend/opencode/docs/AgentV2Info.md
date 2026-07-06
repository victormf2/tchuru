# AgentV2Info


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**model** | [**ModelRef**](ModelRef.md) |  | [optional] 
**request** | [**ProviderRequest**](ProviderRequest.md) |  | 
**system** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**mode** | **str** |  | 
**hidden** | **bool** |  | 
**color** | [**AgentColor**](AgentColor.md) |  | [optional] 
**steps** | **int** |  | [optional] 
**permissions** | [**List[PermissionV2Rule]**](PermissionV2Rule.md) |  | 

## Example

```python
from opencode_sdk.models.agent_v2_info import AgentV2Info

# TODO update the JSON string below
json = "{}"
# create an instance of AgentV2Info from a JSON string
agent_v2_info_instance = AgentV2Info.from_json(json)
# print the JSON string representation of the object
print(AgentV2Info.to_json())

# convert the object into a dict
agent_v2_info_dict = agent_v2_info_instance.to_dict()
# create an instance of AgentV2Info from a dict
agent_v2_info_from_dict = AgentV2Info.from_dict(agent_v2_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



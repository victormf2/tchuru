# ConfigExperimental


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disable_paste_summary** | **bool** |  | [optional] 
**batch_tool** | **bool** |  | [optional] 
**open_telemetry** | **bool** |  | [optional] 
**primary_tools** | **List[str]** |  | [optional] 
**continue_loop_on_deny** | **bool** |  | [optional] 
**mcp_timeout** | **int** |  | [optional] 
**policies** | [**List[ConfigV2ExperimentalPolicy]**](ConfigV2ExperimentalPolicy.md) |  | [optional] 

## Example

```python
from opencode_sdk.models.config_experimental import ConfigExperimental

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigExperimental from a JSON string
config_experimental_instance = ConfigExperimental.from_json(json)
# print the JSON string representation of the object
print(ConfigExperimental.to_json())

# convert the object into a dict
config_experimental_dict = config_experimental_instance.to_dict()
# create an instance of ConfigExperimental from a dict
config_experimental_from_dict = ConfigExperimental.from_dict(config_experimental_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



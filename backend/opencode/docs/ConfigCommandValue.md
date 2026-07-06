# ConfigCommandValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**template** | **str** |  | 
**description** | **str** |  | [optional] 
**agent** | **str** |  | [optional] 
**model** | **str** |  | [optional] 
**variant** | **str** |  | [optional] 
**subtask** | **bool** |  | [optional] 

## Example

```python
from opencode_sdk.models.config_command_value import ConfigCommandValue

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigCommandValue from a JSON string
config_command_value_instance = ConfigCommandValue.from_json(json)
# print the JSON string representation of the object
print(ConfigCommandValue.to_json())

# convert the object into a dict
config_command_value_dict = config_command_value_instance.to_dict()
# create an instance of ConfigCommandValue from a dict
config_command_value_from_dict = ConfigCommandValue.from_dict(config_command_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



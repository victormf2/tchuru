# ConfigMode


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build** | [**AgentConfig**](AgentConfig.md) |  | [optional] 
**plan** | [**AgentConfig**](AgentConfig.md) |  | [optional] 

## Example

```python
from opencode_sdk.models.config_mode import ConfigMode

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigMode from a JSON string
config_mode_instance = ConfigMode.from_json(json)
# print the JSON string representation of the object
print(ConfigMode.to_json())

# convert the object into a dict
config_mode_dict = config_mode_instance.to_dict()
# create an instance of ConfigMode from a dict
config_mode_from_dict = ConfigMode.from_dict(config_mode_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



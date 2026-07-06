# ConfigToolOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_lines** | **int** |  | [optional] 
**max_bytes** | **int** |  | [optional] 

## Example

```python
from opencode_sdk.models.config_tool_output import ConfigToolOutput

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigToolOutput from a JSON string
config_tool_output_instance = ConfigToolOutput.from_json(json)
# print the JSON string representation of the object
print(ConfigToolOutput.to_json())

# convert the object into a dict
config_tool_output_dict = config_tool_output_instance.to_dict()
# create an instance of ConfigToolOutput from a dict
config_tool_output_from_dict = ConfigToolOutput.from_dict(config_tool_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



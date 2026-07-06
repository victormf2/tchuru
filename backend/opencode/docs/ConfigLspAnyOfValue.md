# ConfigLspAnyOfValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disabled** | **bool** |  | 
**command** | **List[str]** |  | 
**extensions** | **List[str]** |  | [optional] 
**env** | **Dict[str, str]** |  | [optional] 
**initialization** | **object** |  | [optional] 

## Example

```python
from opencode_sdk.models.config_lsp_any_of_value import ConfigLspAnyOfValue

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigLspAnyOfValue from a JSON string
config_lsp_any_of_value_instance = ConfigLspAnyOfValue.from_json(json)
# print the JSON string representation of the object
print(ConfigLspAnyOfValue.to_json())

# convert the object into a dict
config_lsp_any_of_value_dict = config_lsp_any_of_value_instance.to_dict()
# create an instance of ConfigLspAnyOfValue from a dict
config_lsp_any_of_value_from_dict = ConfigLspAnyOfValue.from_dict(config_lsp_any_of_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



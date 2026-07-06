# ConfigLsp

Enable or configure LSP servers. Omit or set to false to disable, true to enable built-ins, or an object to enable built-ins with overrides.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------

## Example

```python
from opencode_sdk.models.config_lsp import ConfigLsp

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigLsp from a JSON string
config_lsp_instance = ConfigLsp.from_json(json)
# print the JSON string representation of the object
print(ConfigLsp.to_json())

# convert the object into a dict
config_lsp_dict = config_lsp_instance.to_dict()
# create an instance of ConfigLsp from a dict
config_lsp_from_dict = ConfigLsp.from_dict(config_lsp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



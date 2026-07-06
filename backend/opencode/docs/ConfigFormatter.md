# ConfigFormatter

Enable or configure formatters. Omit or set to false to disable, true to enable built-ins, or an object to enable built-ins with overrides.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------

## Example

```python
from opencode_sdk.models.config_formatter import ConfigFormatter

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigFormatter from a JSON string
config_formatter_instance = ConfigFormatter.from_json(json)
# print the JSON string representation of the object
print(ConfigFormatter.to_json())

# convert the object into a dict
config_formatter_dict = config_formatter_instance.to_dict()
# create an instance of ConfigFormatter from a dict
config_formatter_from_dict = ConfigFormatter.from_dict(config_formatter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



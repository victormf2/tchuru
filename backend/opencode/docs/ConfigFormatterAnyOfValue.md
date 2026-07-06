# ConfigFormatterAnyOfValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disabled** | **bool** |  | [optional] 
**command** | **List[str]** |  | [optional] 
**environment** | **Dict[str, str]** |  | [optional] 
**extensions** | **List[str]** |  | [optional] 

## Example

```python
from opencode_sdk.models.config_formatter_any_of_value import ConfigFormatterAnyOfValue

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigFormatterAnyOfValue from a JSON string
config_formatter_any_of_value_instance = ConfigFormatterAnyOfValue.from_json(json)
# print the JSON string representation of the object
print(ConfigFormatterAnyOfValue.to_json())

# convert the object into a dict
config_formatter_any_of_value_dict = config_formatter_any_of_value_instance.to_dict()
# create an instance of ConfigFormatterAnyOfValue from a dict
config_formatter_any_of_value_from_dict = ConfigFormatterAnyOfValue.from_dict(config_formatter_any_of_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



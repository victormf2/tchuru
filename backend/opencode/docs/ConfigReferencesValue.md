# ConfigReferencesValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**repository** | **str** |  | 
**branch** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**hidden** | **bool** |  | [optional] 
**path** | **str** |  | 

## Example

```python
from opencode_sdk.models.config_references_value import ConfigReferencesValue

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigReferencesValue from a JSON string
config_references_value_instance = ConfigReferencesValue.from_json(json)
# print the JSON string representation of the object
print(ConfigReferencesValue.to_json())

# convert the object into a dict
config_references_value_dict = config_references_value_instance.to_dict()
# create an instance of ConfigReferencesValue from a dict
config_references_value_from_dict = ConfigReferencesValue.from_dict(config_references_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



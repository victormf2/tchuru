# ConfigV2ExperimentalPolicy


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** |  | 
**effect** | [**PolicyEffect**](PolicyEffect.md) |  | 
**resource** | **str** |  | 

## Example

```python
from opencode_sdk.models.config_v2_experimental_policy import ConfigV2ExperimentalPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigV2ExperimentalPolicy from a JSON string
config_v2_experimental_policy_instance = ConfigV2ExperimentalPolicy.from_json(json)
# print the JSON string representation of the object
print(ConfigV2ExperimentalPolicy.to_json())

# convert the object into a dict
config_v2_experimental_policy_dict = config_v2_experimental_policy_instance.to_dict()
# create an instance of ConfigV2ExperimentalPolicy from a dict
config_v2_experimental_policy_from_dict = ConfigV2ExperimentalPolicy.from_dict(config_v2_experimental_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



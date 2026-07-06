# ProviderConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**env** | **List[str]** |  | [optional] 
**id** | **str** |  | [optional] 
**npm** | **str** |  | [optional] 
**whitelist** | **List[str]** |  | [optional] 
**blacklist** | **List[str]** |  | [optional] 
**options** | [**ProviderConfigOptions**](ProviderConfigOptions.md) |  | [optional] 
**models** | [**Dict[str, ProviderConfigModelsValue]**](ProviderConfigModelsValue.md) |  | [optional] 

## Example

```python
from opencode_sdk.models.provider_config import ProviderConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ProviderConfig from a JSON string
provider_config_instance = ProviderConfig.from_json(json)
# print the JSON string representation of the object
print(ProviderConfig.to_json())

# convert the object into a dict
provider_config_dict = provider_config_instance.to_dict()
# create an instance of ProviderConfig from a dict
provider_config_from_dict = ProviderConfig.from_dict(provider_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



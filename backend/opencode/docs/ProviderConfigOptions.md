# ProviderConfigOptions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_key** | **str** |  | [optional] 
**base_url** | **str** |  | [optional] 
**enterprise_url** | **str** |  | [optional] 
**set_cache_key** | **bool** |  | [optional] 
**timeout** | [**ProviderConfigOptionsTimeout**](ProviderConfigOptionsTimeout.md) |  | [optional] 
**header_timeout** | [**ProviderConfigOptionsHeaderTimeout**](ProviderConfigOptionsHeaderTimeout.md) |  | [optional] 
**chunk_timeout** | **int** |  | [optional] 

## Example

```python
from opencode_sdk.models.provider_config_options import ProviderConfigOptions

# TODO update the JSON string below
json = "{}"
# create an instance of ProviderConfigOptions from a JSON string
provider_config_options_instance = ProviderConfigOptions.from_json(json)
# print the JSON string representation of the object
print(ProviderConfigOptions.to_json())

# convert the object into a dict
provider_config_options_dict = provider_config_options_instance.to_dict()
# create an instance of ProviderConfigOptions from a dict
provider_config_options_from_dict = ProviderConfigOptions.from_dict(provider_config_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ProviderConfigModelsValueCost


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input** | **float** |  | 
**output** | **float** |  | 
**cache_read** | **float** |  | [optional] 
**cache_write** | **float** |  | [optional] 
**context_over_200k** | [**ProviderConfigModelsValueCostContextOver200k**](ProviderConfigModelsValueCostContextOver200k.md) |  | [optional] 

## Example

```python
from opencode_sdk.models.provider_config_models_value_cost import ProviderConfigModelsValueCost

# TODO update the JSON string below
json = "{}"
# create an instance of ProviderConfigModelsValueCost from a JSON string
provider_config_models_value_cost_instance = ProviderConfigModelsValueCost.from_json(json)
# print the JSON string representation of the object
print(ProviderConfigModelsValueCost.to_json())

# convert the object into a dict
provider_config_models_value_cost_dict = provider_config_models_value_cost_instance.to_dict()
# create an instance of ProviderConfigModelsValueCost from a dict
provider_config_models_value_cost_from_dict = ProviderConfigModelsValueCost.from_dict(provider_config_models_value_cost_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



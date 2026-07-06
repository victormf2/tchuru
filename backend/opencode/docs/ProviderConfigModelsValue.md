# ProviderConfigModelsValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**family** | **str** |  | [optional] 
**release_date** | **str** |  | [optional] 
**attachment** | **bool** |  | [optional] 
**reasoning** | **bool** |  | [optional] 
**temperature** | **bool** |  | [optional] 
**tool_call** | **bool** |  | [optional] 
**interleaved** | [**ProviderConfigModelsValueInterleaved**](ProviderConfigModelsValueInterleaved.md) |  | [optional] 
**cost** | [**ProviderConfigModelsValueCost**](ProviderConfigModelsValueCost.md) |  | [optional] 
**limit** | [**ProviderConfigModelsValueLimit**](ProviderConfigModelsValueLimit.md) |  | [optional] 
**modalities** | [**ProviderConfigModelsValueModalities**](ProviderConfigModelsValueModalities.md) |  | [optional] 
**experimental** | **bool** |  | [optional] 
**status** | **str** |  | [optional] 
**provider** | [**ProviderConfigModelsValueProvider**](ProviderConfigModelsValueProvider.md) |  | [optional] 
**options** | **object** |  | [optional] 
**headers** | **Dict[str, str]** |  | [optional] 
**variants** | [**Dict[str, ProviderConfigModelsValueVariantsValue]**](ProviderConfigModelsValueVariantsValue.md) | Variant-specific configuration | [optional] 

## Example

```python
from opencode_sdk.models.provider_config_models_value import ProviderConfigModelsValue

# TODO update the JSON string below
json = "{}"
# create an instance of ProviderConfigModelsValue from a JSON string
provider_config_models_value_instance = ProviderConfigModelsValue.from_json(json)
# print the JSON string representation of the object
print(ProviderConfigModelsValue.to_json())

# convert the object into a dict
provider_config_models_value_dict = provider_config_models_value_instance.to_dict()
# create an instance of ProviderConfigModelsValue from a dict
provider_config_models_value_from_dict = ProviderConfigModelsValue.from_dict(provider_config_models_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



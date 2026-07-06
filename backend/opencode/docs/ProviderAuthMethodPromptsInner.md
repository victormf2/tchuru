# ProviderAuthMethodPromptsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**key** | **str** |  | 
**message** | **str** |  | 
**placeholder** | **str** |  | [optional] 
**when** | [**ProviderAuthMethodPromptsInnerAnyOfWhen**](ProviderAuthMethodPromptsInnerAnyOfWhen.md) |  | [optional] 
**options** | [**List[ProviderAuthMethodPromptsInnerAnyOf1OptionsInner]**](ProviderAuthMethodPromptsInnerAnyOf1OptionsInner.md) |  | 

## Example

```python
from opencode_sdk.models.provider_auth_method_prompts_inner import ProviderAuthMethodPromptsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ProviderAuthMethodPromptsInner from a JSON string
provider_auth_method_prompts_inner_instance = ProviderAuthMethodPromptsInner.from_json(json)
# print the JSON string representation of the object
print(ProviderAuthMethodPromptsInner.to_json())

# convert the object into a dict
provider_auth_method_prompts_inner_dict = provider_auth_method_prompts_inner_instance.to_dict()
# create an instance of ProviderAuthMethodPromptsInner from a dict
provider_auth_method_prompts_inner_from_dict = ProviderAuthMethodPromptsInner.from_dict(provider_auth_method_prompts_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



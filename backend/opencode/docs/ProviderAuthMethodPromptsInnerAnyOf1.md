# ProviderAuthMethodPromptsInnerAnyOf1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**key** | **str** |  | 
**message** | **str** |  | 
**options** | [**List[ProviderAuthMethodPromptsInnerAnyOf1OptionsInner]**](ProviderAuthMethodPromptsInnerAnyOf1OptionsInner.md) |  | 
**when** | [**ProviderAuthMethodPromptsInnerAnyOfWhen**](ProviderAuthMethodPromptsInnerAnyOfWhen.md) |  | [optional] 

## Example

```python
from opencode_sdk.models.provider_auth_method_prompts_inner_any_of1 import ProviderAuthMethodPromptsInnerAnyOf1

# TODO update the JSON string below
json = "{}"
# create an instance of ProviderAuthMethodPromptsInnerAnyOf1 from a JSON string
provider_auth_method_prompts_inner_any_of1_instance = ProviderAuthMethodPromptsInnerAnyOf1.from_json(json)
# print the JSON string representation of the object
print(ProviderAuthMethodPromptsInnerAnyOf1.to_json())

# convert the object into a dict
provider_auth_method_prompts_inner_any_of1_dict = provider_auth_method_prompts_inner_any_of1_instance.to_dict()
# create an instance of ProviderAuthMethodPromptsInnerAnyOf1 from a dict
provider_auth_method_prompts_inner_any_of1_from_dict = ProviderAuthMethodPromptsInnerAnyOf1.from_dict(provider_auth_method_prompts_inner_any_of1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



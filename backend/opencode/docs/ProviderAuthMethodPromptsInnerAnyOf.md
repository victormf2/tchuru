# ProviderAuthMethodPromptsInnerAnyOf


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**key** | **str** |  | 
**message** | **str** |  | 
**placeholder** | **str** |  | [optional] 
**when** | [**ProviderAuthMethodPromptsInnerAnyOfWhen**](ProviderAuthMethodPromptsInnerAnyOfWhen.md) |  | [optional] 

## Example

```python
from opencode_sdk.models.provider_auth_method_prompts_inner_any_of import ProviderAuthMethodPromptsInnerAnyOf

# TODO update the JSON string below
json = "{}"
# create an instance of ProviderAuthMethodPromptsInnerAnyOf from a JSON string
provider_auth_method_prompts_inner_any_of_instance = ProviderAuthMethodPromptsInnerAnyOf.from_json(json)
# print the JSON string representation of the object
print(ProviderAuthMethodPromptsInnerAnyOf.to_json())

# convert the object into a dict
provider_auth_method_prompts_inner_any_of_dict = provider_auth_method_prompts_inner_any_of_instance.to_dict()
# create an instance of ProviderAuthMethodPromptsInnerAnyOf from a dict
provider_auth_method_prompts_inner_any_of_from_dict = ProviderAuthMethodPromptsInnerAnyOf.from_dict(provider_auth_method_prompts_inner_any_of_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



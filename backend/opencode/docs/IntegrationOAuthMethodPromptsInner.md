# IntegrationOAuthMethodPromptsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**key** | **str** |  | 
**message** | **str** |  | 
**placeholder** | **str** |  | [optional] 
**when** | [**IntegrationWhen**](IntegrationWhen.md) |  | [optional] 
**options** | [**List[ProviderAuthMethodPromptsInnerAnyOf1OptionsInner]**](ProviderAuthMethodPromptsInnerAnyOf1OptionsInner.md) |  | 

## Example

```python
from opencode_sdk.models.integration_o_auth_method_prompts_inner import IntegrationOAuthMethodPromptsInner

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationOAuthMethodPromptsInner from a JSON string
integration_o_auth_method_prompts_inner_instance = IntegrationOAuthMethodPromptsInner.from_json(json)
# print the JSON string representation of the object
print(IntegrationOAuthMethodPromptsInner.to_json())

# convert the object into a dict
integration_o_auth_method_prompts_inner_dict = integration_o_auth_method_prompts_inner_instance.to_dict()
# create an instance of IntegrationOAuthMethodPromptsInner from a dict
integration_o_auth_method_prompts_inner_from_dict = IntegrationOAuthMethodPromptsInner.from_dict(integration_o_auth_method_prompts_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



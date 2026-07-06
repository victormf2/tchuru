# IntegrationSelectPrompt


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**key** | **str** |  | 
**message** | **str** |  | 
**options** | [**List[ProviderAuthMethodPromptsInnerAnyOf1OptionsInner]**](ProviderAuthMethodPromptsInnerAnyOf1OptionsInner.md) |  | 
**when** | [**IntegrationWhen**](IntegrationWhen.md) |  | [optional] 

## Example

```python
from opencode_sdk.models.integration_select_prompt import IntegrationSelectPrompt

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationSelectPrompt from a JSON string
integration_select_prompt_instance = IntegrationSelectPrompt.from_json(json)
# print the JSON string representation of the object
print(IntegrationSelectPrompt.to_json())

# convert the object into a dict
integration_select_prompt_dict = integration_select_prompt_instance.to_dict()
# create an instance of IntegrationSelectPrompt from a dict
integration_select_prompt_from_dict = IntegrationSelectPrompt.from_dict(integration_select_prompt_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



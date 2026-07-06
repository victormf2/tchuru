# IntegrationTextPrompt


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**key** | **str** |  | 
**message** | **str** |  | 
**placeholder** | **str** |  | [optional] 
**when** | [**IntegrationWhen**](IntegrationWhen.md) |  | [optional] 

## Example

```python
from opencode_sdk.models.integration_text_prompt import IntegrationTextPrompt

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationTextPrompt from a JSON string
integration_text_prompt_instance = IntegrationTextPrompt.from_json(json)
# print the JSON string representation of the object
print(IntegrationTextPrompt.to_json())

# convert the object into a dict
integration_text_prompt_dict = integration_text_prompt_instance.to_dict()
# create an instance of IntegrationTextPrompt from a dict
integration_text_prompt_from_dict = IntegrationTextPrompt.from_dict(integration_text_prompt_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



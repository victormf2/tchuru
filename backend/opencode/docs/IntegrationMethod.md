# IntegrationMethod


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**label** | **str** |  | 
**prompts** | [**List[IntegrationOAuthMethodPromptsInner]**](IntegrationOAuthMethodPromptsInner.md) |  | [optional] 
**names** | **List[str]** |  | 

## Example

```python
from opencode_sdk.models.integration_method import IntegrationMethod

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationMethod from a JSON string
integration_method_instance = IntegrationMethod.from_json(json)
# print the JSON string representation of the object
print(IntegrationMethod.to_json())

# convert the object into a dict
integration_method_dict = integration_method_instance.to_dict()
# create an instance of IntegrationMethod from a dict
integration_method_from_dict = IntegrationMethod.from_dict(integration_method_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



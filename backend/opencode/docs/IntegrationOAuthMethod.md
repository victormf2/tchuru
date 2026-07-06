# IntegrationOAuthMethod


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**label** | **str** |  | 
**prompts** | [**List[IntegrationOAuthMethodPromptsInner]**](IntegrationOAuthMethodPromptsInner.md) |  | [optional] 

## Example

```python
from opencode_sdk.models.integration_o_auth_method import IntegrationOAuthMethod

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationOAuthMethod from a JSON string
integration_o_auth_method_instance = IntegrationOAuthMethod.from_json(json)
# print the JSON string representation of the object
print(IntegrationOAuthMethod.to_json())

# convert the object into a dict
integration_o_auth_method_dict = integration_o_auth_method_instance.to_dict()
# create an instance of IntegrationOAuthMethod from a dict
integration_o_auth_method_from_dict = IntegrationOAuthMethod.from_dict(integration_o_auth_method_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



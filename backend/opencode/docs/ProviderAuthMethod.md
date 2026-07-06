# ProviderAuthMethod


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**label** | **str** |  | 
**prompts** | [**List[ProviderAuthMethodPromptsInner]**](ProviderAuthMethodPromptsInner.md) |  | [optional] 

## Example

```python
from opencode_sdk.models.provider_auth_method import ProviderAuthMethod

# TODO update the JSON string below
json = "{}"
# create an instance of ProviderAuthMethod from a JSON string
provider_auth_method_instance = ProviderAuthMethod.from_json(json)
# print the JSON string representation of the object
print(ProviderAuthMethod.to_json())

# convert the object into a dict
provider_auth_method_dict = provider_auth_method_instance.to_dict()
# create an instance of ProviderAuthMethod from a dict
provider_auth_method_from_dict = ProviderAuthMethod.from_dict(provider_auth_method_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ProviderAuthAuthorization


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** |  | 
**method** | **str** |  | 
**instructions** | **str** |  | 

## Example

```python
from opencode_sdk.models.provider_auth_authorization import ProviderAuthAuthorization

# TODO update the JSON string below
json = "{}"
# create an instance of ProviderAuthAuthorization from a JSON string
provider_auth_authorization_instance = ProviderAuthAuthorization.from_json(json)
# print the JSON string representation of the object
print(ProviderAuthAuthorization.to_json())

# convert the object into a dict
provider_auth_authorization_dict = provider_auth_authorization_instance.to_dict()
# create an instance of ProviderAuthAuthorization from a dict
provider_auth_authorization_from_dict = ProviderAuthAuthorization.from_dict(provider_auth_authorization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ProviderAuthError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**data** | [**ProviderAuthErrorData**](ProviderAuthErrorData.md) |  | 

## Example

```python
from opencode_sdk.models.provider_auth_error import ProviderAuthError

# TODO update the JSON string below
json = "{}"
# create an instance of ProviderAuthError from a JSON string
provider_auth_error_instance = ProviderAuthError.from_json(json)
# print the JSON string representation of the object
print(ProviderAuthError.to_json())

# convert the object into a dict
provider_auth_error_dict = provider_auth_error_instance.to_dict()
# create an instance of ProviderAuthError from a dict
provider_auth_error_from_dict = ProviderAuthError.from_dict(provider_auth_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



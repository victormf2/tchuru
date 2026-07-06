# ProviderAuthError1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**data** | [**ProviderAuthError1Data**](ProviderAuthError1Data.md) |  | 

## Example

```python
from opencode_sdk.models.provider_auth_error1 import ProviderAuthError1

# TODO update the JSON string below
json = "{}"
# create an instance of ProviderAuthError1 from a JSON string
provider_auth_error1_instance = ProviderAuthError1.from_json(json)
# print the JSON string representation of the object
print(ProviderAuthError1.to_json())

# convert the object into a dict
provider_auth_error1_dict = provider_auth_error1_instance.to_dict()
# create an instance of ProviderAuthError1 from a dict
provider_auth_error1_from_dict = ProviderAuthError1.from_dict(provider_auth_error1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



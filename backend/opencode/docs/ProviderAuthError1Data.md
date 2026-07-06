# ProviderAuthError1Data


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provider_id** | **str** |  | [optional] 
**var_field** | **str** |  | [optional] 
**message** | **str** |  | [optional] 
**kind** | **str** |  | [optional] 

## Example

```python
from opencode_sdk.models.provider_auth_error1_data import ProviderAuthError1Data

# TODO update the JSON string below
json = "{}"
# create an instance of ProviderAuthError1Data from a JSON string
provider_auth_error1_data_instance = ProviderAuthError1Data.from_json(json)
# print the JSON string representation of the object
print(ProviderAuthError1Data.to_json())

# convert the object into a dict
provider_auth_error1_data_dict = provider_auth_error1_data_instance.to_dict()
# create an instance of ProviderAuthError1Data from a dict
provider_auth_error1_data_from_dict = ProviderAuthError1Data.from_dict(provider_auth_error1_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



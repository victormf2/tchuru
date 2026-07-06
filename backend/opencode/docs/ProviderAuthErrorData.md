# ProviderAuthErrorData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provider_id** | **str** |  | 
**message** | **str** |  | 

## Example

```python
from opencode_sdk.models.provider_auth_error_data import ProviderAuthErrorData

# TODO update the JSON string below
json = "{}"
# create an instance of ProviderAuthErrorData from a JSON string
provider_auth_error_data_instance = ProviderAuthErrorData.from_json(json)
# print the JSON string representation of the object
print(ProviderAuthErrorData.to_json())

# convert the object into a dict
provider_auth_error_data_dict = provider_auth_error_data_instance.to_dict()
# create an instance of ProviderAuthErrorData from a dict
provider_auth_error_data_from_dict = ProviderAuthErrorData.from_dict(provider_auth_error_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



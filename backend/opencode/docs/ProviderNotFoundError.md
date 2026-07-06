# ProviderNotFoundError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tag** | **str** |  | 
**provider_id** | **str** |  | 
**message** | **str** |  | 

## Example

```python
from opencode_sdk.models.provider_not_found_error import ProviderNotFoundError

# TODO update the JSON string below
json = "{}"
# create an instance of ProviderNotFoundError from a JSON string
provider_not_found_error_instance = ProviderNotFoundError.from_json(json)
# print the JSON string representation of the object
print(ProviderNotFoundError.to_json())

# convert the object into a dict
provider_not_found_error_dict = provider_not_found_error_instance.to_dict()
# create an instance of ProviderNotFoundError from a dict
provider_not_found_error_from_dict = ProviderNotFoundError.from_dict(provider_not_found_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



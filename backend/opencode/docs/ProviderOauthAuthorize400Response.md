# ProviderOauthAuthorize400Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**data** | [**ProviderAuthError1Data**](ProviderAuthError1Data.md) |  | 
**tag** | **str** |  | 
**message** | **str** |  | 
**kind** | **str** |  | [optional] 
**var_field** | **str** |  | [optional] 

## Example

```python
from opencode_sdk.models.provider_oauth_authorize400_response import ProviderOauthAuthorize400Response

# TODO update the JSON string below
json = "{}"
# create an instance of ProviderOauthAuthorize400Response from a JSON string
provider_oauth_authorize400_response_instance = ProviderOauthAuthorize400Response.from_json(json)
# print the JSON string representation of the object
print(ProviderOauthAuthorize400Response.to_json())

# convert the object into a dict
provider_oauth_authorize400_response_dict = provider_oauth_authorize400_response_instance.to_dict()
# create an instance of ProviderOauthAuthorize400Response from a dict
provider_oauth_authorize400_response_from_dict = ProviderOauthAuthorize400Response.from_dict(provider_oauth_authorize400_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



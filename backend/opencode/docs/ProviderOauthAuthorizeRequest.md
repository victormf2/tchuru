# ProviderOauthAuthorizeRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**method** | **float** | Auth method index | 
**inputs** | **Dict[str, str]** |  | [optional] 

## Example

```python
from opencode_sdk.models.provider_oauth_authorize_request import ProviderOauthAuthorizeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ProviderOauthAuthorizeRequest from a JSON string
provider_oauth_authorize_request_instance = ProviderOauthAuthorizeRequest.from_json(json)
# print the JSON string representation of the object
print(ProviderOauthAuthorizeRequest.to_json())

# convert the object into a dict
provider_oauth_authorize_request_dict = provider_oauth_authorize_request_instance.to_dict()
# create an instance of ProviderOauthAuthorizeRequest from a dict
provider_oauth_authorize_request_from_dict = ProviderOauthAuthorizeRequest.from_dict(provider_oauth_authorize_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



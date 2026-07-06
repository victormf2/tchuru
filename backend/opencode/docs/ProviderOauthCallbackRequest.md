# ProviderOauthCallbackRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**method** | **float** | Auth method index | 
**code** | **str** |  | [optional] 

## Example

```python
from opencode_sdk.models.provider_oauth_callback_request import ProviderOauthCallbackRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ProviderOauthCallbackRequest from a JSON string
provider_oauth_callback_request_instance = ProviderOauthCallbackRequest.from_json(json)
# print the JSON string representation of the object
print(ProviderOauthCallbackRequest.to_json())

# convert the object into a dict
provider_oauth_callback_request_dict = provider_oauth_callback_request_instance.to_dict()
# create an instance of ProviderOauthCallbackRequest from a dict
provider_oauth_callback_request_from_dict = ProviderOauthCallbackRequest.from_dict(provider_oauth_callback_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



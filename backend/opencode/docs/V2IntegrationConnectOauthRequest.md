# V2IntegrationConnectOauthRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**method_id** | **str** |  | 
**inputs** | **Dict[str, str]** |  | 
**label** | **str** |  | [optional] 

## Example

```python
from opencode_sdk.models.v2_integration_connect_oauth_request import V2IntegrationConnectOauthRequest

# TODO update the JSON string below
json = "{}"
# create an instance of V2IntegrationConnectOauthRequest from a JSON string
v2_integration_connect_oauth_request_instance = V2IntegrationConnectOauthRequest.from_json(json)
# print the JSON string representation of the object
print(V2IntegrationConnectOauthRequest.to_json())

# convert the object into a dict
v2_integration_connect_oauth_request_dict = v2_integration_connect_oauth_request_instance.to_dict()
# create an instance of V2IntegrationConnectOauthRequest from a dict
v2_integration_connect_oauth_request_from_dict = V2IntegrationConnectOauthRequest.from_dict(v2_integration_connect_oauth_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



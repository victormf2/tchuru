# V2IntegrationConnectKeyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** |  | 
**label** | **str** |  | [optional] 

## Example

```python
from opencode_sdk.models.v2_integration_connect_key_request import V2IntegrationConnectKeyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of V2IntegrationConnectKeyRequest from a JSON string
v2_integration_connect_key_request_instance = V2IntegrationConnectKeyRequest.from_json(json)
# print the JSON string representation of the object
print(V2IntegrationConnectKeyRequest.to_json())

# convert the object into a dict
v2_integration_connect_key_request_dict = v2_integration_connect_key_request_instance.to_dict()
# create an instance of V2IntegrationConnectKeyRequest from a dict
v2_integration_connect_key_request_from_dict = V2IntegrationConnectKeyRequest.from_dict(v2_integration_connect_key_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



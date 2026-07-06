# V2IntegrationConnectKey400Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tag** | **str** |  | 
**message** | **str** |  | 
**kind** | **str** |  | [optional] 
**var_field** | **str** |  | [optional] 

## Example

```python
from opencode_sdk.models.v2_integration_connect_key400_response import V2IntegrationConnectKey400Response

# TODO update the JSON string below
json = "{}"
# create an instance of V2IntegrationConnectKey400Response from a JSON string
v2_integration_connect_key400_response_instance = V2IntegrationConnectKey400Response.from_json(json)
# print the JSON string representation of the object
print(V2IntegrationConnectKey400Response.to_json())

# convert the object into a dict
v2_integration_connect_key400_response_dict = v2_integration_connect_key400_response_instance.to_dict()
# create an instance of V2IntegrationConnectKey400Response from a dict
v2_integration_connect_key400_response_from_dict = V2IntegrationConnectKey400Response.from_dict(v2_integration_connect_key400_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



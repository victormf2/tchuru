# V2ProviderGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | [**LocationInfo**](LocationInfo.md) |  | 
**data** | [**ProviderV2Info**](ProviderV2Info.md) |  | 

## Example

```python
from opencode_sdk.models.v2_provider_get200_response import V2ProviderGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of V2ProviderGet200Response from a JSON string
v2_provider_get200_response_instance = V2ProviderGet200Response.from_json(json)
# print the JSON string representation of the object
print(V2ProviderGet200Response.to_json())

# convert the object into a dict
v2_provider_get200_response_dict = v2_provider_get200_response_instance.to_dict()
# create an instance of V2ProviderGet200Response from a dict
v2_provider_get200_response_from_dict = V2ProviderGet200Response.from_dict(v2_provider_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



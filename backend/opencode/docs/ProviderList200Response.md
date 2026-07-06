# ProviderList200Response

List of providers

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**all** | [**List[Provider]**](Provider.md) |  | 
**default** | **Dict[str, str]** |  | 
**connected** | **List[str]** |  | 

## Example

```python
from opencode_sdk.models.provider_list200_response import ProviderList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ProviderList200Response from a JSON string
provider_list200_response_instance = ProviderList200Response.from_json(json)
# print the JSON string representation of the object
print(ProviderList200Response.to_json())

# convert the object into a dict
provider_list200_response_dict = provider_list200_response_instance.to_dict()
# create an instance of ProviderList200Response from a dict
provider_list200_response_from_dict = ProviderList200Response.from_dict(provider_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



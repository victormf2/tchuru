# ConfigProviders200Response

List of providers

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**providers** | [**List[Provider]**](Provider.md) |  | 
**default** | **Dict[str, str]** |  | 

## Example

```python
from opencode_sdk.models.config_providers200_response import ConfigProviders200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigProviders200Response from a JSON string
config_providers200_response_instance = ConfigProviders200Response.from_json(json)
# print the JSON string representation of the object
print(ConfigProviders200Response.to_json())

# convert the object into a dict
config_providers200_response_dict = config_providers200_response_instance.to_dict()
# create an instance of ConfigProviders200Response from a dict
config_providers200_response_from_dict = ConfigProviders200Response.from_dict(config_providers200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



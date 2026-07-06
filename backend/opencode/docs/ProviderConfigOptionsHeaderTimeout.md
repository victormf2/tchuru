# ProviderConfigOptionsHeaderTimeout

Timeout in milliseconds to wait for response headers. Provider integrations may set defaults. Set to false to disable timeout.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------

## Example

```python
from opencode_sdk.models.provider_config_options_header_timeout import ProviderConfigOptionsHeaderTimeout

# TODO update the JSON string below
json = "{}"
# create an instance of ProviderConfigOptionsHeaderTimeout from a JSON string
provider_config_options_header_timeout_instance = ProviderConfigOptionsHeaderTimeout.from_json(json)
# print the JSON string representation of the object
print(ProviderConfigOptionsHeaderTimeout.to_json())

# convert the object into a dict
provider_config_options_header_timeout_dict = provider_config_options_header_timeout_instance.to_dict()
# create an instance of ProviderConfigOptionsHeaderTimeout from a dict
provider_config_options_header_timeout_from_dict = ProviderConfigOptionsHeaderTimeout.from_dict(provider_config_options_header_timeout_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



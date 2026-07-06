# ProviderConfigOptionsTimeout

Timeout in milliseconds for full requests to this provider. Set to false to disable timeout.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------

## Example

```python
from opencode_sdk.models.provider_config_options_timeout import ProviderConfigOptionsTimeout

# TODO update the JSON string below
json = "{}"
# create an instance of ProviderConfigOptionsTimeout from a JSON string
provider_config_options_timeout_instance = ProviderConfigOptionsTimeout.from_json(json)
# print the JSON string representation of the object
print(ProviderConfigOptionsTimeout.to_json())

# convert the object into a dict
provider_config_options_timeout_dict = provider_config_options_timeout_instance.to_dict()
# create an instance of ProviderConfigOptionsTimeout from a dict
provider_config_options_timeout_from_dict = ProviderConfigOptionsTimeout.from_dict(provider_config_options_timeout_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ProviderNative


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**url** | **str** |  | [optional] 
**settings** | **object** |  | 

## Example

```python
from opencode_sdk.models.provider_native import ProviderNative

# TODO update the JSON string below
json = "{}"
# create an instance of ProviderNative from a JSON string
provider_native_instance = ProviderNative.from_json(json)
# print the JSON string representation of the object
print(ProviderNative.to_json())

# convert the object into a dict
provider_native_dict = provider_native_instance.to_dict()
# create an instance of ProviderNative from a dict
provider_native_from_dict = ProviderNative.from_dict(provider_native_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



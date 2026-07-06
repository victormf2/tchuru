# ProviderAISDK


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**package** | **str** |  | 
**url** | **str** |  | [optional] 
**settings** | **object** |  | [optional] 

## Example

```python
from opencode_sdk.models.provider_aisdk import ProviderAISDK

# TODO update the JSON string below
json = "{}"
# create an instance of ProviderAISDK from a JSON string
provider_aisdk_instance = ProviderAISDK.from_json(json)
# print the JSON string representation of the object
print(ProviderAISDK.to_json())

# convert the object into a dict
provider_aisdk_dict = provider_aisdk_instance.to_dict()
# create an instance of ProviderAISDK from a dict
provider_aisdk_from_dict = ProviderAISDK.from_dict(provider_aisdk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



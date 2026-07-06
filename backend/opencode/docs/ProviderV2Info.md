# ProviderV2Info


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**integration_id** | **str** |  | [optional] 
**name** | **str** |  | 
**disabled** | **bool** |  | [optional] 
**api** | [**ProviderApi**](ProviderApi.md) |  | 
**request** | [**ProviderRequest**](ProviderRequest.md) |  | 

## Example

```python
from opencode_sdk.models.provider_v2_info import ProviderV2Info

# TODO update the JSON string below
json = "{}"
# create an instance of ProviderV2Info from a JSON string
provider_v2_info_instance = ProviderV2Info.from_json(json)
# print the JSON string representation of the object
print(ProviderV2Info.to_json())

# convert the object into a dict
provider_v2_info_dict = provider_v2_info_instance.to_dict()
# create an instance of ProviderV2Info from a dict
provider_v2_info_from_dict = ProviderV2Info.from_dict(provider_v2_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



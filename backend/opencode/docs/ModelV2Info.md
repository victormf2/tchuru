# ModelV2Info


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**provider_id** | **str** |  | 
**family** | **str** |  | [optional] 
**name** | **str** |  | 
**api** | [**ModelApi**](ModelApi.md) |  | 
**capabilities** | [**ModelCapabilities**](ModelCapabilities.md) |  | 
**request** | [**ModelV2InfoRequest**](ModelV2InfoRequest.md) |  | 
**variants** | [**List[ModelV2InfoVariantsInner]**](ModelV2InfoVariantsInner.md) |  | 
**time** | [**ModelV2InfoTime**](ModelV2InfoTime.md) |  | 
**cost** | [**List[ModelCost]**](ModelCost.md) |  | 
**status** | **str** |  | 
**enabled** | **bool** |  | 
**limit** | [**ModelV2InfoLimit**](ModelV2InfoLimit.md) |  | 

## Example

```python
from opencode_sdk.models.model_v2_info import ModelV2Info

# TODO update the JSON string below
json = "{}"
# create an instance of ModelV2Info from a JSON string
model_v2_info_instance = ModelV2Info.from_json(json)
# print the JSON string representation of the object
print(ModelV2Info.to_json())

# convert the object into a dict
model_v2_info_dict = model_v2_info_instance.to_dict()
# create an instance of ModelV2Info from a dict
model_v2_info_from_dict = ModelV2Info.from_dict(model_v2_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



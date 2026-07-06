# Model


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**provider_id** | **str** |  | 
**api** | [**ModelApi**](ModelApi.md) |  | 
**name** | **str** |  | 
**family** | **str** |  | [optional] 
**capabilities** | [**ModelCapabilities**](ModelCapabilities.md) |  | 
**cost** | [**ModelCost**](ModelCost.md) |  | 
**limit** | [**ProviderConfigModelsValueLimit**](ProviderConfigModelsValueLimit.md) |  | 
**status** | **str** |  | 
**options** | **object** |  | 
**headers** | **Dict[str, str]** |  | 
**release_date** | **str** |  | 
**variants** | **Dict[str, object]** |  | [optional] 

## Example

```python
from opencode_sdk.models.model import Model

# TODO update the JSON string below
json = "{}"
# create an instance of Model from a JSON string
model_instance = Model.from_json(json)
# print the JSON string representation of the object
print(Model.to_json())

# convert the object into a dict
model_dict = model_instance.to_dict()
# create an instance of Model from a dict
model_from_dict = Model.from_dict(model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



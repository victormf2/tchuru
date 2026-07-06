# ModelCost


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input** | **float** |  | 
**output** | **float** |  | 
**cache** | [**SessionTokensCache**](SessionTokensCache.md) |  | 
**tiers** | [**List[ModelCostTiersInner]**](ModelCostTiersInner.md) |  | [optional] 
**experimental_over200_k** | [**ModelCostExperimentalOver200K**](ModelCostExperimentalOver200K.md) |  | [optional] 

## Example

```python
from opencode_sdk.models.model_cost import ModelCost

# TODO update the JSON string below
json = "{}"
# create an instance of ModelCost from a JSON string
model_cost_instance = ModelCost.from_json(json)
# print the JSON string representation of the object
print(ModelCost.to_json())

# convert the object into a dict
model_cost_dict = model_cost_instance.to_dict()
# create an instance of ModelCost from a dict
model_cost_from_dict = ModelCost.from_dict(model_cost_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



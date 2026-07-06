# ModelCostTiersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input** | **float** |  | 
**output** | **float** |  | 
**cache** | [**SessionTokensCache**](SessionTokensCache.md) |  | 
**tier** | [**ModelCostTiersInnerTier**](ModelCostTiersInnerTier.md) |  | 

## Example

```python
from opencode_sdk.models.model_cost_tiers_inner import ModelCostTiersInner

# TODO update the JSON string below
json = "{}"
# create an instance of ModelCostTiersInner from a JSON string
model_cost_tiers_inner_instance = ModelCostTiersInner.from_json(json)
# print the JSON string representation of the object
print(ModelCostTiersInner.to_json())

# convert the object into a dict
model_cost_tiers_inner_dict = model_cost_tiers_inner_instance.to_dict()
# create an instance of ModelCostTiersInner from a dict
model_cost_tiers_inner_from_dict = ModelCostTiersInner.from_dict(model_cost_tiers_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ModelsDevRefreshed


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | **object** |  | 

## Example

```python
from opencode_sdk.models.models_dev_refreshed import ModelsDevRefreshed

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsDevRefreshed from a JSON string
models_dev_refreshed_instance = ModelsDevRefreshed.from_json(json)
# print the JSON string representation of the object
print(ModelsDevRefreshed.to_json())

# convert the object into a dict
models_dev_refreshed_dict = models_dev_refreshed_instance.to_dict()
# create an instance of ModelsDevRefreshed from a dict
models_dev_refreshed_from_dict = ModelsDevRefreshed.from_dict(models_dev_refreshed_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



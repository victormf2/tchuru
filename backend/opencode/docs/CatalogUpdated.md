# CatalogUpdated


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
from opencode_sdk.models.catalog_updated import CatalogUpdated

# TODO update the JSON string below
json = "{}"
# create an instance of CatalogUpdated from a JSON string
catalog_updated_instance = CatalogUpdated.from_json(json)
# print the JSON string representation of the object
print(CatalogUpdated.to_json())

# convert the object into a dict
catalog_updated_dict = catalog_updated_instance.to_dict()
# create an instance of CatalogUpdated from a dict
catalog_updated_from_dict = CatalogUpdated.from_dict(catalog_updated_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



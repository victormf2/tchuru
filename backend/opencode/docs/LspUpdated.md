# LspUpdated


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
from opencode_sdk.models.lsp_updated import LspUpdated

# TODO update the JSON string below
json = "{}"
# create an instance of LspUpdated from a JSON string
lsp_updated_instance = LspUpdated.from_json(json)
# print the JSON string representation of the object
print(LspUpdated.to_json())

# convert the object into a dict
lsp_updated_dict = lsp_updated_instance.to_dict()
# create an instance of LspUpdated from a dict
lsp_updated_from_dict = LspUpdated.from_dict(lsp_updated_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



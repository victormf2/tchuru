# GlobalDisposed


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
from opencode_sdk.models.global_disposed import GlobalDisposed

# TODO update the JSON string below
json = "{}"
# create an instance of GlobalDisposed from a JSON string
global_disposed_instance = GlobalDisposed.from_json(json)
# print the JSON string representation of the object
print(GlobalDisposed.to_json())

# convert the object into a dict
global_disposed_dict = global_disposed_instance.to_dict()
# create an instance of GlobalDisposed from a dict
global_disposed_from_dict = GlobalDisposed.from_dict(global_disposed_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



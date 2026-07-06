# ReferenceUpdated


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
from opencode_sdk.models.reference_updated import ReferenceUpdated

# TODO update the JSON string below
json = "{}"
# create an instance of ReferenceUpdated from a JSON string
reference_updated_instance = ReferenceUpdated.from_json(json)
# print the JSON string representation of the object
print(ReferenceUpdated.to_json())

# convert the object into a dict
reference_updated_dict = reference_updated_instance.to_dict()
# create an instance of ReferenceUpdated from a dict
reference_updated_from_dict = ReferenceUpdated.from_dict(reference_updated_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



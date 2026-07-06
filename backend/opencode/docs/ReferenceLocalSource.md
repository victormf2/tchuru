# ReferenceLocalSource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**path** | **str** |  | 
**description** | **str** |  | [optional] 
**hidden** | **bool** |  | [optional] 

## Example

```python
from opencode_sdk.models.reference_local_source import ReferenceLocalSource

# TODO update the JSON string below
json = "{}"
# create an instance of ReferenceLocalSource from a JSON string
reference_local_source_instance = ReferenceLocalSource.from_json(json)
# print the JSON string representation of the object
print(ReferenceLocalSource.to_json())

# convert the object into a dict
reference_local_source_dict = reference_local_source_instance.to_dict()
# create an instance of ReferenceLocalSource from a dict
reference_local_source_from_dict = ReferenceLocalSource.from_dict(reference_local_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



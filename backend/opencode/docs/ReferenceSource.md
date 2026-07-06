# ReferenceSource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**path** | **str** |  | 
**description** | **str** |  | [optional] 
**hidden** | **bool** |  | [optional] 
**repository** | **str** |  | 
**branch** | **str** |  | [optional] 

## Example

```python
from opencode_sdk.models.reference_source import ReferenceSource

# TODO update the JSON string below
json = "{}"
# create an instance of ReferenceSource from a JSON string
reference_source_instance = ReferenceSource.from_json(json)
# print the JSON string representation of the object
print(ReferenceSource.to_json())

# convert the object into a dict
reference_source_dict = reference_source_instance.to_dict()
# create an instance of ReferenceSource from a dict
reference_source_from_dict = ReferenceSource.from_dict(reference_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



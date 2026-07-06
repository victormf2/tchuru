# ReferenceGitSource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**repository** | **str** |  | 
**branch** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**hidden** | **bool** |  | [optional] 

## Example

```python
from opencode_sdk.models.reference_git_source import ReferenceGitSource

# TODO update the JSON string below
json = "{}"
# create an instance of ReferenceGitSource from a JSON string
reference_git_source_instance = ReferenceGitSource.from_json(json)
# print the JSON string representation of the object
print(ReferenceGitSource.to_json())

# convert the object into a dict
reference_git_source_dict = reference_git_source_instance.to_dict()
# create an instance of ReferenceGitSource from a dict
reference_git_source_from_dict = ReferenceGitSource.from_dict(reference_git_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



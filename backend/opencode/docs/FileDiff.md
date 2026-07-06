# FileDiff


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **str** |  | 
**status** | **str** |  | 
**additions** | **int** |  | 
**deletions** | **int** |  | 
**patch** | **str** |  | 

## Example

```python
from opencode_sdk.models.file_diff import FileDiff

# TODO update the JSON string below
json = "{}"
# create an instance of FileDiff from a JSON string
file_diff_instance = FileDiff.from_json(json)
# print the JSON string representation of the object
print(FileDiff.to_json())

# convert the object into a dict
file_diff_dict = file_diff_instance.to_dict()
# create an instance of FileDiff from a dict
file_diff_from_dict = FileDiff.from_dict(file_diff_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# VcsFileDiff


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file** | **str** |  | 
**patch** | **str** |  | [optional] 
**additions** | **float** |  | 
**deletions** | **float** |  | 
**status** | **str** |  | [optional] 

## Example

```python
from opencode_sdk.models.vcs_file_diff import VcsFileDiff

# TODO update the JSON string below
json = "{}"
# create an instance of VcsFileDiff from a JSON string
vcs_file_diff_instance = VcsFileDiff.from_json(json)
# print the JSON string representation of the object
print(VcsFileDiff.to_json())

# convert the object into a dict
vcs_file_diff_dict = vcs_file_diff_instance.to_dict()
# create an instance of VcsFileDiff from a dict
vcs_file_diff_from_dict = VcsFileDiff.from_dict(vcs_file_diff_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



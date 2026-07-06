# FileContentPatchHunksInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**old_start** | **int** |  | 
**old_lines** | **int** |  | 
**new_start** | **int** |  | 
**new_lines** | **int** |  | 
**lines** | **List[str]** |  | 

## Example

```python
from opencode_sdk.models.file_content_patch_hunks_inner import FileContentPatchHunksInner

# TODO update the JSON string below
json = "{}"
# create an instance of FileContentPatchHunksInner from a JSON string
file_content_patch_hunks_inner_instance = FileContentPatchHunksInner.from_json(json)
# print the JSON string representation of the object
print(FileContentPatchHunksInner.to_json())

# convert the object into a dict
file_content_patch_hunks_inner_dict = file_content_patch_hunks_inner_instance.to_dict()
# create an instance of FileContentPatchHunksInner from a dict
file_content_patch_hunks_inner_from_dict = FileContentPatchHunksInner.from_dict(file_content_patch_hunks_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



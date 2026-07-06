# FileContentPatch


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**old_file_name** | **str** |  | 
**new_file_name** | **str** |  | 
**old_header** | **str** |  | [optional] 
**new_header** | **str** |  | [optional] 
**hunks** | [**List[FileContentPatchHunksInner]**](FileContentPatchHunksInner.md) |  | 
**index** | **str** |  | [optional] 

## Example

```python
from opencode_sdk.models.file_content_patch import FileContentPatch

# TODO update the JSON string below
json = "{}"
# create an instance of FileContentPatch from a JSON string
file_content_patch_instance = FileContentPatch.from_json(json)
# print the JSON string representation of the object
print(FileContentPatch.to_json())

# convert the object into a dict
file_content_patch_dict = file_content_patch_instance.to_dict()
# create an instance of FileContentPatch from a dict
file_content_patch_from_dict = FileContentPatch.from_dict(file_content_patch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



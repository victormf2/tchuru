# FileContent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**content** | **str** |  | 
**diff** | **str** |  | [optional] 
**patch** | [**FileContentPatch**](FileContentPatch.md) |  | [optional] 
**encoding** | **str** |  | [optional] 
**mime_type** | **str** |  | [optional] 

## Example

```python
from opencode_sdk.models.file_content import FileContent

# TODO update the JSON string below
json = "{}"
# create an instance of FileContent from a JSON string
file_content_instance = FileContent.from_json(json)
# print the JSON string representation of the object
print(FileContent.to_json())

# convert the object into a dict
file_content_dict = file_content_instance.to_dict()
# create an instance of FileContent from a dict
file_content_from_dict = FileContent.from_dict(file_content_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



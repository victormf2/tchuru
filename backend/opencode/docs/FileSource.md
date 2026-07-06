# FileSource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | [**FilePartSourceText**](FilePartSourceText.md) |  | 
**type** | **str** |  | 
**path** | **str** |  | 

## Example

```python
from opencode_sdk.models.file_source import FileSource

# TODO update the JSON string below
json = "{}"
# create an instance of FileSource from a JSON string
file_source_instance = FileSource.from_json(json)
# print the JSON string representation of the object
print(FileSource.to_json())

# convert the object into a dict
file_source_dict = file_source_instance.to_dict()
# create an instance of FileSource from a dict
file_source_from_dict = FileSource.from_dict(file_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# FilePartSource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | [**FilePartSourceText**](FilePartSourceText.md) |  | 
**type** | **str** |  | 
**path** | **str** |  | 
**range** | [**Range**](Range.md) |  | 
**name** | **str** |  | 
**kind** | **int** |  | 
**client_name** | **str** |  | 
**uri** | **str** |  | 

## Example

```python
from opencode_sdk.models.file_part_source import FilePartSource

# TODO update the JSON string below
json = "{}"
# create an instance of FilePartSource from a JSON string
file_part_source_instance = FilePartSource.from_json(json)
# print the JSON string representation of the object
print(FilePartSource.to_json())

# convert the object into a dict
file_part_source_dict = file_part_source_instance.to_dict()
# create an instance of FilePartSource from a dict
file_part_source_from_dict = FilePartSource.from_dict(file_part_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



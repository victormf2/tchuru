# FilePartSourceText


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** |  | 
**start** | **float** |  | 
**end** | **float** |  | 

## Example

```python
from opencode_sdk.models.file_part_source_text import FilePartSourceText

# TODO update the JSON string below
json = "{}"
# create an instance of FilePartSourceText from a JSON string
file_part_source_text_instance = FilePartSourceText.from_json(json)
# print the JSON string representation of the object
print(FilePartSourceText.to_json())

# convert the object into a dict
file_part_source_text_dict = file_part_source_text_instance.to_dict()
# create an instance of FilePartSourceText from a dict
file_part_source_text_from_dict = FilePartSourceText.from_dict(file_part_source_text_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



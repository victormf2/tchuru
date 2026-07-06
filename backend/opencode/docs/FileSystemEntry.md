# FileSystemEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from opencode_sdk.models.file_system_entry import FileSystemEntry

# TODO update the JSON string below
json = "{}"
# create an instance of FileSystemEntry from a JSON string
file_system_entry_instance = FileSystemEntry.from_json(json)
# print the JSON string representation of the object
print(FileSystemEntry.to_json())

# convert the object into a dict
file_system_entry_dict = file_system_entry_instance.to_dict()
# create an instance of FileSystemEntry from a dict
file_system_entry_from_dict = FileSystemEntry.from_dict(file_system_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



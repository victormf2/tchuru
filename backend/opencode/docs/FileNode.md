# FileNode


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**path** | **str** |  | 
**absolute** | **str** |  | 
**type** | **str** |  | 
**ignored** | **bool** |  | 

## Example

```python
from opencode_sdk.models.file_node import FileNode

# TODO update the JSON string below
json = "{}"
# create an instance of FileNode from a JSON string
file_node_instance = FileNode.from_json(json)
# print the JSON string representation of the object
print(FileNode.to_json())

# convert the object into a dict
file_node_dict = file_node_instance.to_dict()
# create an instance of FileNode from a dict
file_node_from_dict = FileNode.from_dict(file_node_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



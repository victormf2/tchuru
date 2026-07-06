# ToolFileContent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**uri** | **str** |  | 
**mime** | **str** |  | 
**name** | **str** |  | [optional] 

## Example

```python
from opencode_sdk.models.tool_file_content import ToolFileContent

# TODO update the JSON string below
json = "{}"
# create an instance of ToolFileContent from a JSON string
tool_file_content_instance = ToolFileContent.from_json(json)
# print the JSON string representation of the object
print(ToolFileContent.to_json())

# convert the object into a dict
tool_file_content_dict = tool_file_content_instance.to_dict()
# create an instance of ToolFileContent from a dict
tool_file_content_from_dict = ToolFileContent.from_dict(tool_file_content_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



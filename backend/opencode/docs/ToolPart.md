# ToolPart


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**session_id** | **str** |  | 
**message_id** | **str** |  | 
**type** | **str** |  | 
**call_id** | **str** |  | 
**tool** | **str** |  | 
**state** | [**ToolState**](ToolState.md) |  | 
**metadata** | **object** |  | [optional] 

## Example

```python
from opencode_sdk.models.tool_part import ToolPart

# TODO update the JSON string below
json = "{}"
# create an instance of ToolPart from a JSON string
tool_part_instance = ToolPart.from_json(json)
# print the JSON string representation of the object
print(ToolPart.to_json())

# convert the object into a dict
tool_part_dict = tool_part_instance.to_dict()
# create an instance of ToolPart from a dict
tool_part_from_dict = ToolPart.from_dict(tool_part_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



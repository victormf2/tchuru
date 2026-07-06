# ToolStateCompleted


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | 
**input** | **object** |  | 
**output** | **str** |  | 
**title** | **str** |  | 
**metadata** | **object** |  | 
**time** | [**ToolStateCompletedTime**](ToolStateCompletedTime.md) |  | 
**attachments** | [**List[FilePart]**](FilePart.md) |  | [optional] 

## Example

```python
from opencode_sdk.models.tool_state_completed import ToolStateCompleted

# TODO update the JSON string below
json = "{}"
# create an instance of ToolStateCompleted from a JSON string
tool_state_completed_instance = ToolStateCompleted.from_json(json)
# print the JSON string representation of the object
print(ToolStateCompleted.to_json())

# convert the object into a dict
tool_state_completed_dict = tool_state_completed_instance.to_dict()
# create an instance of ToolStateCompleted from a dict
tool_state_completed_from_dict = ToolStateCompleted.from_dict(tool_state_completed_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



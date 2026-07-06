# ToolState


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | 
**input** | **object** |  | 
**raw** | **str** |  | 
**title** | **str** |  | 
**metadata** | **object** |  | 
**time** | [**ToolStateErrorTime**](ToolStateErrorTime.md) |  | 
**output** | **str** |  | 
**attachments** | [**List[FilePart]**](FilePart.md) |  | [optional] 
**error** | **str** |  | 

## Example

```python
from opencode_sdk.models.tool_state import ToolState

# TODO update the JSON string below
json = "{}"
# create an instance of ToolState from a JSON string
tool_state_instance = ToolState.from_json(json)
# print the JSON string representation of the object
print(ToolState.to_json())

# convert the object into a dict
tool_state_dict = tool_state_instance.to_dict()
# create an instance of ToolState from a dict
tool_state_from_dict = ToolState.from_dict(tool_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



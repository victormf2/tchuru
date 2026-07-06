# ToolStateError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | 
**input** | **object** |  | 
**error** | **str** |  | 
**metadata** | **object** |  | [optional] 
**time** | [**ToolStateErrorTime**](ToolStateErrorTime.md) |  | 

## Example

```python
from opencode_sdk.models.tool_state_error import ToolStateError

# TODO update the JSON string below
json = "{}"
# create an instance of ToolStateError from a JSON string
tool_state_error_instance = ToolStateError.from_json(json)
# print the JSON string representation of the object
print(ToolStateError.to_json())

# convert the object into a dict
tool_state_error_dict = tool_state_error_instance.to_dict()
# create an instance of ToolStateError from a dict
tool_state_error_from_dict = ToolStateError.from_dict(tool_state_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



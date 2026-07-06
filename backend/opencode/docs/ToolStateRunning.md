# ToolStateRunning


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | 
**input** | **object** |  | 
**title** | **str** |  | [optional] 
**metadata** | **object** |  | [optional] 
**time** | [**ToolStateRunningTime**](ToolStateRunningTime.md) |  | 

## Example

```python
from opencode_sdk.models.tool_state_running import ToolStateRunning

# TODO update the JSON string below
json = "{}"
# create an instance of ToolStateRunning from a JSON string
tool_state_running_instance = ToolStateRunning.from_json(json)
# print the JSON string representation of the object
print(ToolStateRunning.to_json())

# convert the object into a dict
tool_state_running_dict = tool_state_running_instance.to_dict()
# create an instance of ToolStateRunning from a dict
tool_state_running_from_dict = ToolStateRunning.from_dict(tool_state_running_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



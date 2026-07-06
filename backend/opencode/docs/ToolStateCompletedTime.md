# ToolStateCompletedTime


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start** | **int** |  | 
**end** | **int** |  | 
**compacted** | **int** |  | [optional] 

## Example

```python
from opencode_sdk.models.tool_state_completed_time import ToolStateCompletedTime

# TODO update the JSON string below
json = "{}"
# create an instance of ToolStateCompletedTime from a JSON string
tool_state_completed_time_instance = ToolStateCompletedTime.from_json(json)
# print the JSON string representation of the object
print(ToolStateCompletedTime.to_json())

# convert the object into a dict
tool_state_completed_time_dict = tool_state_completed_time_instance.to_dict()
# create an instance of ToolStateCompletedTime from a dict
tool_state_completed_time_from_dict = ToolStateCompletedTime.from_dict(tool_state_completed_time_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



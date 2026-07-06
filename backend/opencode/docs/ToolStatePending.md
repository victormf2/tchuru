# ToolStatePending


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | 
**input** | **object** |  | 
**raw** | **str** |  | 

## Example

```python
from opencode_sdk.models.tool_state_pending import ToolStatePending

# TODO update the JSON string below
json = "{}"
# create an instance of ToolStatePending from a JSON string
tool_state_pending_instance = ToolStatePending.from_json(json)
# print the JSON string representation of the object
print(ToolStatePending.to_json())

# convert the object into a dict
tool_state_pending_dict = tool_state_pending_instance.to_dict()
# create an instance of ToolStatePending from a dict
tool_state_pending_from_dict = ToolStatePending.from_dict(tool_state_pending_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



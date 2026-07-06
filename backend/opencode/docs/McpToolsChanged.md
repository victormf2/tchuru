# McpToolsChanged


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**GlobalEventPayloadAnyOf70Properties**](GlobalEventPayloadAnyOf70Properties.md) |  | 

## Example

```python
from opencode_sdk.models.mcp_tools_changed import McpToolsChanged

# TODO update the JSON string below
json = "{}"
# create an instance of McpToolsChanged from a JSON string
mcp_tools_changed_instance = McpToolsChanged.from_json(json)
# print the JSON string representation of the object
print(McpToolsChanged.to_json())

# convert the object into a dict
mcp_tools_changed_dict = mcp_tools_changed_instance.to_dict()
# create an instance of McpToolsChanged from a dict
mcp_tools_changed_from_dict = McpToolsChanged.from_dict(mcp_tools_changed_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



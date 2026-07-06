# EventMcpToolsChanged


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf70Properties**](GlobalEventPayloadAnyOf70Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_mcp_tools_changed import EventMcpToolsChanged

# TODO update the JSON string below
json = "{}"
# create an instance of EventMcpToolsChanged from a JSON string
event_mcp_tools_changed_instance = EventMcpToolsChanged.from_json(json)
# print the JSON string representation of the object
print(EventMcpToolsChanged.to_json())

# convert the object into a dict
event_mcp_tools_changed_dict = event_mcp_tools_changed_instance.to_dict()
# create an instance of EventMcpToolsChanged from a dict
event_mcp_tools_changed_from_dict = EventMcpToolsChanged.from_dict(event_mcp_tools_changed_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



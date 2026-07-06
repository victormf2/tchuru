# McpBrowserOpenFailed


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**GlobalEventPayloadAnyOf71Properties**](GlobalEventPayloadAnyOf71Properties.md) |  | 

## Example

```python
from opencode_sdk.models.mcp_browser_open_failed import McpBrowserOpenFailed

# TODO update the JSON string below
json = "{}"
# create an instance of McpBrowserOpenFailed from a JSON string
mcp_browser_open_failed_instance = McpBrowserOpenFailed.from_json(json)
# print the JSON string representation of the object
print(McpBrowserOpenFailed.to_json())

# convert the object into a dict
mcp_browser_open_failed_dict = mcp_browser_open_failed_instance.to_dict()
# create an instance of McpBrowserOpenFailed from a dict
mcp_browser_open_failed_from_dict = McpBrowserOpenFailed.from_dict(mcp_browser_open_failed_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



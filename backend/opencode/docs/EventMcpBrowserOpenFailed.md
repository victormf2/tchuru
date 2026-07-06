# EventMcpBrowserOpenFailed


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf71Properties**](GlobalEventPayloadAnyOf71Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_mcp_browser_open_failed import EventMcpBrowserOpenFailed

# TODO update the JSON string below
json = "{}"
# create an instance of EventMcpBrowserOpenFailed from a JSON string
event_mcp_browser_open_failed_instance = EventMcpBrowserOpenFailed.from_json(json)
# print the JSON string representation of the object
print(EventMcpBrowserOpenFailed.to_json())

# convert the object into a dict
event_mcp_browser_open_failed_dict = event_mcp_browser_open_failed_instance.to_dict()
# create an instance of EventMcpBrowserOpenFailed from a dict
event_mcp_browser_open_failed_from_dict = EventMcpBrowserOpenFailed.from_dict(event_mcp_browser_open_failed_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



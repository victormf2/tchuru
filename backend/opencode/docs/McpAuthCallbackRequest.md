# McpAuthCallbackRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** |  | 

## Example

```python
from opencode_sdk.models.mcp_auth_callback_request import McpAuthCallbackRequest

# TODO update the JSON string below
json = "{}"
# create an instance of McpAuthCallbackRequest from a JSON string
mcp_auth_callback_request_instance = McpAuthCallbackRequest.from_json(json)
# print the JSON string representation of the object
print(McpAuthCallbackRequest.to_json())

# convert the object into a dict
mcp_auth_callback_request_dict = mcp_auth_callback_request_instance.to_dict()
# create an instance of McpAuthCallbackRequest from a dict
mcp_auth_callback_request_from_dict = McpAuthCallbackRequest.from_dict(mcp_auth_callback_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



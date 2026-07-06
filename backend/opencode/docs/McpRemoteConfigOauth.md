# McpRemoteConfigOauth

OAuth authentication configuration for the MCP server. Set to false to disable OAuth auto-detection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** |  | [optional] 
**client_secret** | **str** |  | [optional] 
**scope** | **str** |  | [optional] 
**callback_port** | **int** |  | [optional] 
**redirect_uri** | **str** |  | [optional] 

## Example

```python
from opencode_sdk.models.mcp_remote_config_oauth import McpRemoteConfigOauth

# TODO update the JSON string below
json = "{}"
# create an instance of McpRemoteConfigOauth from a JSON string
mcp_remote_config_oauth_instance = McpRemoteConfigOauth.from_json(json)
# print the JSON string representation of the object
print(McpRemoteConfigOauth.to_json())

# convert the object into a dict
mcp_remote_config_oauth_dict = mcp_remote_config_oauth_instance.to_dict()
# create an instance of McpRemoteConfigOauth from a dict
mcp_remote_config_oauth_from_dict = McpRemoteConfigOauth.from_dict(mcp_remote_config_oauth_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



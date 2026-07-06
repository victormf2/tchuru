# McpRemoteConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Type of MCP server connection | 
**url** | **str** | URL of the remote MCP server | 
**enabled** | **bool** |  | [optional] 
**headers** | **Dict[str, str]** |  | [optional] 
**oauth** | [**McpRemoteConfigOauth**](McpRemoteConfigOauth.md) |  | [optional] 
**timeout** | **int** |  | [optional] 

## Example

```python
from opencode_sdk.models.mcp_remote_config import McpRemoteConfig

# TODO update the JSON string below
json = "{}"
# create an instance of McpRemoteConfig from a JSON string
mcp_remote_config_instance = McpRemoteConfig.from_json(json)
# print the JSON string representation of the object
print(McpRemoteConfig.to_json())

# convert the object into a dict
mcp_remote_config_dict = mcp_remote_config_instance.to_dict()
# create an instance of McpRemoteConfig from a dict
mcp_remote_config_from_dict = McpRemoteConfig.from_dict(mcp_remote_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



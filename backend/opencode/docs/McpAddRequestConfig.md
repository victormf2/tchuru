# McpAddRequestConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Type of MCP server connection | 
**command** | **List[str]** | Command and arguments to run the MCP server | 
**cwd** | **str** |  | [optional] 
**environment** | **Dict[str, str]** |  | [optional] 
**enabled** | **bool** |  | [optional] 
**timeout** | **int** |  | [optional] 
**url** | **str** | URL of the remote MCP server | 
**headers** | **Dict[str, str]** |  | [optional] 
**oauth** | [**McpRemoteConfigOauth**](McpRemoteConfigOauth.md) |  | [optional] 

## Example

```python
from opencode_sdk.models.mcp_add_request_config import McpAddRequestConfig

# TODO update the JSON string below
json = "{}"
# create an instance of McpAddRequestConfig from a JSON string
mcp_add_request_config_instance = McpAddRequestConfig.from_json(json)
# print the JSON string representation of the object
print(McpAddRequestConfig.to_json())

# convert the object into a dict
mcp_add_request_config_dict = mcp_add_request_config_instance.to_dict()
# create an instance of McpAddRequestConfig from a dict
mcp_add_request_config_from_dict = McpAddRequestConfig.from_dict(mcp_add_request_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



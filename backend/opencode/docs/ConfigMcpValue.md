# ConfigMcpValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Type of MCP server connection | 
**command** | **List[str]** | Command and arguments to run the MCP server | 
**cwd** | **str** |  | [optional] 
**environment** | **Dict[str, str]** |  | [optional] 
**enabled** | **bool** |  | 
**timeout** | **int** |  | [optional] 
**url** | **str** | URL of the remote MCP server | 
**headers** | **Dict[str, str]** |  | [optional] 
**oauth** | [**McpRemoteConfigOauth**](McpRemoteConfigOauth.md) |  | [optional] 

## Example

```python
from opencode_sdk.models.config_mcp_value import ConfigMcpValue

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigMcpValue from a JSON string
config_mcp_value_instance = ConfigMcpValue.from_json(json)
# print the JSON string representation of the object
print(ConfigMcpValue.to_json())

# convert the object into a dict
config_mcp_value_dict = config_mcp_value_instance.to_dict()
# create an instance of ConfigMcpValue from a dict
config_mcp_value_from_dict = ConfigMcpValue.from_dict(config_mcp_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



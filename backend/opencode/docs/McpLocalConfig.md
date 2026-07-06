# McpLocalConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Type of MCP server connection | 
**command** | **List[str]** | Command and arguments to run the MCP server | 
**cwd** | **str** |  | [optional] 
**environment** | **Dict[str, str]** |  | [optional] 
**enabled** | **bool** |  | [optional] 
**timeout** | **int** |  | [optional] 

## Example

```python
from opencode_sdk.models.mcp_local_config import McpLocalConfig

# TODO update the JSON string below
json = "{}"
# create an instance of McpLocalConfig from a JSON string
mcp_local_config_instance = McpLocalConfig.from_json(json)
# print the JSON string representation of the object
print(McpLocalConfig.to_json())

# convert the object into a dict
mcp_local_config_dict = mcp_local_config_instance.to_dict()
# create an instance of McpLocalConfig from a dict
mcp_local_config_from_dict = McpLocalConfig.from_dict(mcp_local_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



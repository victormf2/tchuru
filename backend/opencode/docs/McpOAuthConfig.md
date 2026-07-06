# McpOAuthConfig


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
from opencode_sdk.models.mcp_o_auth_config import McpOAuthConfig

# TODO update the JSON string below
json = "{}"
# create an instance of McpOAuthConfig from a JSON string
mcp_o_auth_config_instance = McpOAuthConfig.from_json(json)
# print the JSON string representation of the object
print(McpOAuthConfig.to_json())

# convert the object into a dict
mcp_o_auth_config_dict = mcp_o_auth_config_instance.to_dict()
# create an instance of McpOAuthConfig from a dict
mcp_o_auth_config_from_dict = McpOAuthConfig.from_dict(mcp_o_auth_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



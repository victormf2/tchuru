# McpServerNotFoundError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tag** | **str** |  | 
**name** | **str** |  | 
**message** | **str** |  | 

## Example

```python
from opencode_sdk.models.mcp_server_not_found_error import McpServerNotFoundError

# TODO update the JSON string below
json = "{}"
# create an instance of McpServerNotFoundError from a JSON string
mcp_server_not_found_error_instance = McpServerNotFoundError.from_json(json)
# print the JSON string representation of the object
print(McpServerNotFoundError.to_json())

# convert the object into a dict
mcp_server_not_found_error_dict = mcp_server_not_found_error_instance.to_dict()
# create an instance of McpServerNotFoundError from a dict
mcp_server_not_found_error_from_dict = McpServerNotFoundError.from_dict(mcp_server_not_found_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



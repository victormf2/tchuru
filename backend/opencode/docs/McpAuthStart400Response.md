# McpAuthStart400Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** |  | 
**tag** | **str** |  | 
**message** | **str** |  | 
**kind** | **str** |  | [optional] 
**var_field** | **str** |  | [optional] 

## Example

```python
from opencode_sdk.models.mcp_auth_start400_response import McpAuthStart400Response

# TODO update the JSON string below
json = "{}"
# create an instance of McpAuthStart400Response from a JSON string
mcp_auth_start400_response_instance = McpAuthStart400Response.from_json(json)
# print the JSON string representation of the object
print(McpAuthStart400Response.to_json())

# convert the object into a dict
mcp_auth_start400_response_dict = mcp_auth_start400_response_instance.to_dict()
# create an instance of McpAuthStart400Response from a dict
mcp_auth_start400_response_from_dict = McpAuthStart400Response.from_dict(mcp_auth_start400_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



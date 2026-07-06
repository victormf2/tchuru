# McpAuthStart200Response

OAuth flow started

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorization_url** | **str** |  | 
**oauth_state** | **str** |  | 

## Example

```python
from opencode_sdk.models.mcp_auth_start200_response import McpAuthStart200Response

# TODO update the JSON string below
json = "{}"
# create an instance of McpAuthStart200Response from a JSON string
mcp_auth_start200_response_instance = McpAuthStart200Response.from_json(json)
# print the JSON string representation of the object
print(McpAuthStart200Response.to_json())

# convert the object into a dict
mcp_auth_start200_response_dict = mcp_auth_start200_response_instance.to_dict()
# create an instance of McpAuthStart200Response from a dict
mcp_auth_start200_response_from_dict = McpAuthStart200Response.from_dict(mcp_auth_start200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



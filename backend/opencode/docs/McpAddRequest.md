# McpAddRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**config** | [**McpAddRequestConfig**](McpAddRequestConfig.md) |  | 

## Example

```python
from opencode_sdk.models.mcp_add_request import McpAddRequest

# TODO update the JSON string below
json = "{}"
# create an instance of McpAddRequest from a JSON string
mcp_add_request_instance = McpAddRequest.from_json(json)
# print the JSON string representation of the object
print(McpAddRequest.to_json())

# convert the object into a dict
mcp_add_request_dict = mcp_add_request_instance.to_dict()
# create an instance of McpAddRequest from a dict
mcp_add_request_from_dict = McpAddRequest.from_dict(mcp_add_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



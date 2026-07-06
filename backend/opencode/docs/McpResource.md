# McpResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**uri** | **str** |  | 
**description** | **str** |  | [optional] 
**mime_type** | **str** |  | [optional] 
**client** | **str** |  | 

## Example

```python
from opencode_sdk.models.mcp_resource import McpResource

# TODO update the JSON string below
json = "{}"
# create an instance of McpResource from a JSON string
mcp_resource_instance = McpResource.from_json(json)
# print the JSON string representation of the object
print(McpResource.to_json())

# convert the object into a dict
mcp_resource_dict = mcp_resource_instance.to_dict()
# create an instance of McpResource from a dict
mcp_resource_from_dict = McpResource.from_dict(mcp_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



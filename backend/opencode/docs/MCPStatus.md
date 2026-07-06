# MCPStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | 
**error** | **str** |  | 

## Example

```python
from opencode_sdk.models.mcp_status import MCPStatus

# TODO update the JSON string below
json = "{}"
# create an instance of MCPStatus from a JSON string
mcp_status_instance = MCPStatus.from_json(json)
# print the JSON string representation of the object
print(MCPStatus.to_json())

# convert the object into a dict
mcp_status_dict = mcp_status_instance.to_dict()
# create an instance of MCPStatus from a dict
mcp_status_from_dict = MCPStatus.from_dict(mcp_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



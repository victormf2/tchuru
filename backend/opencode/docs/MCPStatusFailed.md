# MCPStatusFailed


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | 
**error** | **str** |  | 

## Example

```python
from opencode_sdk.models.mcp_status_failed import MCPStatusFailed

# TODO update the JSON string below
json = "{}"
# create an instance of MCPStatusFailed from a JSON string
mcp_status_failed_instance = MCPStatusFailed.from_json(json)
# print the JSON string representation of the object
print(MCPStatusFailed.to_json())

# convert the object into a dict
mcp_status_failed_dict = mcp_status_failed_instance.to_dict()
# create an instance of MCPStatusFailed from a dict
mcp_status_failed_from_dict = MCPStatusFailed.from_dict(mcp_status_failed_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



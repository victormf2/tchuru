# MCPStatusNeedsClientRegistration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | 
**error** | **str** |  | 

## Example

```python
from opencode_sdk.models.mcp_status_needs_client_registration import MCPStatusNeedsClientRegistration

# TODO update the JSON string below
json = "{}"
# create an instance of MCPStatusNeedsClientRegistration from a JSON string
mcp_status_needs_client_registration_instance = MCPStatusNeedsClientRegistration.from_json(json)
# print the JSON string representation of the object
print(MCPStatusNeedsClientRegistration.to_json())

# convert the object into a dict
mcp_status_needs_client_registration_dict = mcp_status_needs_client_registration_instance.to_dict()
# create an instance of MCPStatusNeedsClientRegistration from a dict
mcp_status_needs_client_registration_from_dict = MCPStatusNeedsClientRegistration.from_dict(mcp_status_needs_client_registration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



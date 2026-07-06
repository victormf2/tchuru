# PermissionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**session_id** | **str** |  | 
**permission** | **str** |  | 
**patterns** | **List[str]** |  | 
**metadata** | **object** |  | 
**always** | **List[str]** |  | 
**tool** | [**GlobalEventPayloadAnyOf64PropertiesTool**](GlobalEventPayloadAnyOf64PropertiesTool.md) |  | [optional] 

## Example

```python
from opencode_sdk.models.permission_request import PermissionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PermissionRequest from a JSON string
permission_request_instance = PermissionRequest.from_json(json)
# print the JSON string representation of the object
print(PermissionRequest.to_json())

# convert the object into a dict
permission_request_dict = permission_request_instance.to_dict()
# create an instance of PermissionRequest from a dict
permission_request_from_dict = PermissionRequest.from_dict(permission_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



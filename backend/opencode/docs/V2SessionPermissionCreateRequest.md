# V2SessionPermissionCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**action** | **str** |  | 
**resources** | **List[str]** |  | 
**save** | **List[str]** |  | [optional] 
**metadata** | **object** |  | [optional] 
**source** | [**PermissionV2Source**](PermissionV2Source.md) |  | [optional] 
**agent** | **str** |  | [optional] 

## Example

```python
from opencode_sdk.models.v2_session_permission_create_request import V2SessionPermissionCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of V2SessionPermissionCreateRequest from a JSON string
v2_session_permission_create_request_instance = V2SessionPermissionCreateRequest.from_json(json)
# print the JSON string representation of the object
print(V2SessionPermissionCreateRequest.to_json())

# convert the object into a dict
v2_session_permission_create_request_dict = v2_session_permission_create_request_instance.to_dict()
# create an instance of V2SessionPermissionCreateRequest from a dict
v2_session_permission_create_request_from_dict = V2SessionPermissionCreateRequest.from_dict(v2_session_permission_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



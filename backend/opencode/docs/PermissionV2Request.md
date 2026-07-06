# PermissionV2Request


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**session_id** | **str** |  | 
**action** | **str** |  | 
**resources** | **List[str]** |  | 
**save** | **List[str]** |  | [optional] 
**metadata** | **object** |  | [optional] 
**source** | [**PermissionV2Source**](PermissionV2Source.md) |  | [optional] 

## Example

```python
from opencode_sdk.models.permission_v2_request import PermissionV2Request

# TODO update the JSON string below
json = "{}"
# create an instance of PermissionV2Request from a JSON string
permission_v2_request_instance = PermissionV2Request.from_json(json)
# print the JSON string representation of the object
print(PermissionV2Request.to_json())

# convert the object into a dict
permission_v2_request_dict = permission_v2_request_instance.to_dict()
# create an instance of PermissionV2Request from a dict
permission_v2_request_from_dict = PermissionV2Request.from_dict(permission_v2_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



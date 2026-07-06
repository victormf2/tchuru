# PermissionRespondRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**response** | **str** |  | 

## Example

```python
from opencode_sdk.models.permission_respond_request import PermissionRespondRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PermissionRespondRequest from a JSON string
permission_respond_request_instance = PermissionRespondRequest.from_json(json)
# print the JSON string representation of the object
print(PermissionRespondRequest.to_json())

# convert the object into a dict
permission_respond_request_dict = permission_respond_request_instance.to_dict()
# create an instance of PermissionRespondRequest from a dict
permission_respond_request_from_dict = PermissionRespondRequest.from_dict(permission_respond_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



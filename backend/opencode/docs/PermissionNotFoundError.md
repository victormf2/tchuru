# PermissionNotFoundError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tag** | **str** |  | 
**request_id** | **str** |  | 
**message** | **str** |  | 

## Example

```python
from opencode_sdk.models.permission_not_found_error import PermissionNotFoundError

# TODO update the JSON string below
json = "{}"
# create an instance of PermissionNotFoundError from a JSON string
permission_not_found_error_instance = PermissionNotFoundError.from_json(json)
# print the JSON string representation of the object
print(PermissionNotFoundError.to_json())

# convert the object into a dict
permission_not_found_error_dict = permission_not_found_error_instance.to_dict()
# create an instance of PermissionNotFoundError from a dict
permission_not_found_error_from_dict = PermissionNotFoundError.from_dict(permission_not_found_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



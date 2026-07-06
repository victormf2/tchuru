# PermissionSavedInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**project_id** | **str** |  | 
**action** | **str** |  | 
**resource** | **str** |  | 

## Example

```python
from opencode_sdk.models.permission_saved_info import PermissionSavedInfo

# TODO update the JSON string below
json = "{}"
# create an instance of PermissionSavedInfo from a JSON string
permission_saved_info_instance = PermissionSavedInfo.from_json(json)
# print the JSON string representation of the object
print(PermissionSavedInfo.to_json())

# convert the object into a dict
permission_saved_info_dict = permission_saved_info_instance.to_dict()
# create an instance of PermissionSavedInfo from a dict
permission_saved_info_from_dict = PermissionSavedInfo.from_dict(permission_saved_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



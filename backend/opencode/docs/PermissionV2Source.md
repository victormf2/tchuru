# PermissionV2Source


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**message_id** | **str** |  | 
**call_id** | **str** |  | 

## Example

```python
from opencode_sdk.models.permission_v2_source import PermissionV2Source

# TODO update the JSON string below
json = "{}"
# create an instance of PermissionV2Source from a JSON string
permission_v2_source_instance = PermissionV2Source.from_json(json)
# print the JSON string representation of the object
print(PermissionV2Source.to_json())

# convert the object into a dict
permission_v2_source_dict = permission_v2_source_instance.to_dict()
# create an instance of PermissionV2Source from a dict
permission_v2_source_from_dict = PermissionV2Source.from_dict(permission_v2_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



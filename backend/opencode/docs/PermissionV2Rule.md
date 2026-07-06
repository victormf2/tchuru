# PermissionV2Rule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** |  | 
**resource** | **str** |  | 
**effect** | [**PermissionV2Effect**](PermissionV2Effect.md) |  | 

## Example

```python
from opencode_sdk.models.permission_v2_rule import PermissionV2Rule

# TODO update the JSON string below
json = "{}"
# create an instance of PermissionV2Rule from a JSON string
permission_v2_rule_instance = PermissionV2Rule.from_json(json)
# print the JSON string representation of the object
print(PermissionV2Rule.to_json())

# convert the object into a dict
permission_v2_rule_dict = permission_v2_rule_instance.to_dict()
# create an instance of PermissionV2Rule from a dict
permission_v2_rule_from_dict = PermissionV2Rule.from_dict(permission_v2_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



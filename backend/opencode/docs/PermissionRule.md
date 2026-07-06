# PermissionRule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**permission** | **str** |  | 
**pattern** | **str** |  | 
**action** | [**PermissionAction**](PermissionAction.md) |  | 

## Example

```python
from opencode_sdk.models.permission_rule import PermissionRule

# TODO update the JSON string below
json = "{}"
# create an instance of PermissionRule from a JSON string
permission_rule_instance = PermissionRule.from_json(json)
# print the JSON string representation of the object
print(PermissionRule.to_json())

# convert the object into a dict
permission_rule_dict = permission_rule_instance.to_dict()
# create an instance of PermissionRule from a dict
permission_rule_from_dict = PermissionRule.from_dict(permission_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



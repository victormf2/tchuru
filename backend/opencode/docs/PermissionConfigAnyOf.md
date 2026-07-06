# PermissionConfigAnyOf


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**read** | [**PermissionRuleConfig**](PermissionRuleConfig.md) |  | [optional] 
**edit** | [**PermissionRuleConfig**](PermissionRuleConfig.md) |  | [optional] 
**glob** | [**PermissionRuleConfig**](PermissionRuleConfig.md) |  | [optional] 
**grep** | [**PermissionRuleConfig**](PermissionRuleConfig.md) |  | [optional] 
**list** | [**PermissionRuleConfig**](PermissionRuleConfig.md) |  | [optional] 
**bash** | [**PermissionRuleConfig**](PermissionRuleConfig.md) |  | [optional] 
**task** | [**PermissionRuleConfig**](PermissionRuleConfig.md) |  | [optional] 
**external_directory** | [**PermissionRuleConfig**](PermissionRuleConfig.md) |  | [optional] 
**todowrite** | [**PermissionActionConfig**](PermissionActionConfig.md) |  | [optional] 
**question** | [**PermissionActionConfig**](PermissionActionConfig.md) |  | [optional] 
**webfetch** | [**PermissionActionConfig**](PermissionActionConfig.md) |  | [optional] 
**websearch** | [**PermissionActionConfig**](PermissionActionConfig.md) |  | [optional] 
**lsp** | [**PermissionRuleConfig**](PermissionRuleConfig.md) |  | [optional] 
**doom_loop** | [**PermissionActionConfig**](PermissionActionConfig.md) |  | [optional] 
**skill** | [**PermissionRuleConfig**](PermissionRuleConfig.md) |  | [optional] 

## Example

```python
from opencode_sdk.models.permission_config_any_of import PermissionConfigAnyOf

# TODO update the JSON string below
json = "{}"
# create an instance of PermissionConfigAnyOf from a JSON string
permission_config_any_of_instance = PermissionConfigAnyOf.from_json(json)
# print the JSON string representation of the object
print(PermissionConfigAnyOf.to_json())

# convert the object into a dict
permission_config_any_of_dict = permission_config_any_of_instance.to_dict()
# create an instance of PermissionConfigAnyOf from a dict
permission_config_any_of_from_dict = PermissionConfigAnyOf.from_dict(permission_config_any_of_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



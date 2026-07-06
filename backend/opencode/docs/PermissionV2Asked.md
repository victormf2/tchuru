# PermissionV2Asked


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**GlobalEventPayloadAnyOf50Properties**](GlobalEventPayloadAnyOf50Properties.md) |  | 

## Example

```python
from opencode_sdk.models.permission_v2_asked import PermissionV2Asked

# TODO update the JSON string below
json = "{}"
# create an instance of PermissionV2Asked from a JSON string
permission_v2_asked_instance = PermissionV2Asked.from_json(json)
# print the JSON string representation of the object
print(PermissionV2Asked.to_json())

# convert the object into a dict
permission_v2_asked_dict = permission_v2_asked_instance.to_dict()
# create an instance of PermissionV2Asked from a dict
permission_v2_asked_from_dict = PermissionV2Asked.from_dict(permission_v2_asked_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# PermissionV2Replied


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**GlobalEventPayloadAnyOf51Properties**](GlobalEventPayloadAnyOf51Properties.md) |  | 

## Example

```python
from opencode_sdk.models.permission_v2_replied import PermissionV2Replied

# TODO update the JSON string below
json = "{}"
# create an instance of PermissionV2Replied from a JSON string
permission_v2_replied_instance = PermissionV2Replied.from_json(json)
# print the JSON string representation of the object
print(PermissionV2Replied.to_json())

# convert the object into a dict
permission_v2_replied_dict = permission_v2_replied_instance.to_dict()
# create an instance of PermissionV2Replied from a dict
permission_v2_replied_from_dict = PermissionV2Replied.from_dict(permission_v2_replied_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



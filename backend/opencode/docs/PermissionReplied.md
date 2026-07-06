# PermissionReplied


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**GlobalEventPayloadAnyOf65Properties**](GlobalEventPayloadAnyOf65Properties.md) |  | 

## Example

```python
from opencode_sdk.models.permission_replied import PermissionReplied

# TODO update the JSON string below
json = "{}"
# create an instance of PermissionReplied from a JSON string
permission_replied_instance = PermissionReplied.from_json(json)
# print the JSON string representation of the object
print(PermissionReplied.to_json())

# convert the object into a dict
permission_replied_dict = permission_replied_instance.to_dict()
# create an instance of PermissionReplied from a dict
permission_replied_from_dict = PermissionReplied.from_dict(permission_replied_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



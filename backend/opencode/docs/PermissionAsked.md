# PermissionAsked


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**GlobalEventPayloadAnyOf64Properties**](GlobalEventPayloadAnyOf64Properties.md) |  | 

## Example

```python
from opencode_sdk.models.permission_asked import PermissionAsked

# TODO update the JSON string below
json = "{}"
# create an instance of PermissionAsked from a JSON string
permission_asked_instance = PermissionAsked.from_json(json)
# print the JSON string representation of the object
print(PermissionAsked.to_json())

# convert the object into a dict
permission_asked_dict = permission_asked_instance.to_dict()
# create an instance of PermissionAsked from a dict
permission_asked_from_dict = PermissionAsked.from_dict(permission_asked_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



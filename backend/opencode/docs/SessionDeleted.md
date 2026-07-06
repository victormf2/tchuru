# SessionDeleted


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**GlobalEventPayloadAnyOf4Properties**](GlobalEventPayloadAnyOf4Properties.md) |  | 

## Example

```python
from opencode_sdk.models.session_deleted import SessionDeleted

# TODO update the JSON string below
json = "{}"
# create an instance of SessionDeleted from a JSON string
session_deleted_instance = SessionDeleted.from_json(json)
# print the JSON string representation of the object
print(SessionDeleted.to_json())

# convert the object into a dict
session_deleted_dict = session_deleted_instance.to_dict()
# create an instance of SessionDeleted from a dict
session_deleted_from_dict = SessionDeleted.from_dict(session_deleted_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



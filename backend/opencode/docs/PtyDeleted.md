# PtyDeleted


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**GlobalEventPayloadAnyOf58Properties**](GlobalEventPayloadAnyOf58Properties.md) |  | 

## Example

```python
from opencode_sdk.models.pty_deleted import PtyDeleted

# TODO update the JSON string below
json = "{}"
# create an instance of PtyDeleted from a JSON string
pty_deleted_instance = PtyDeleted.from_json(json)
# print the JSON string representation of the object
print(PtyDeleted.to_json())

# convert the object into a dict
pty_deleted_dict = pty_deleted_instance.to_dict()
# create an instance of PtyDeleted from a dict
pty_deleted_from_dict = PtyDeleted.from_dict(pty_deleted_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



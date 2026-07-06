# SessionNextRevertCommitted


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**GlobalEventPayloadAnyOf42Properties**](GlobalEventPayloadAnyOf42Properties.md) |  | 

## Example

```python
from opencode_sdk.models.session_next_revert_committed import SessionNextRevertCommitted

# TODO update the JSON string below
json = "{}"
# create an instance of SessionNextRevertCommitted from a JSON string
session_next_revert_committed_instance = SessionNextRevertCommitted.from_json(json)
# print the JSON string representation of the object
print(SessionNextRevertCommitted.to_json())

# convert the object into a dict
session_next_revert_committed_dict = session_next_revert_committed_instance.to_dict()
# create an instance of SessionNextRevertCommitted from a dict
session_next_revert_committed_from_dict = SessionNextRevertCommitted.from_dict(session_next_revert_committed_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



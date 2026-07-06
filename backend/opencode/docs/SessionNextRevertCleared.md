# SessionNextRevertCleared


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**GlobalEventPayloadAnyOf41Properties**](GlobalEventPayloadAnyOf41Properties.md) |  | 

## Example

```python
from opencode_sdk.models.session_next_revert_cleared import SessionNextRevertCleared

# TODO update the JSON string below
json = "{}"
# create an instance of SessionNextRevertCleared from a JSON string
session_next_revert_cleared_instance = SessionNextRevertCleared.from_json(json)
# print the JSON string representation of the object
print(SessionNextRevertCleared.to_json())

# convert the object into a dict
session_next_revert_cleared_dict = session_next_revert_cleared_instance.to_dict()
# create an instance of SessionNextRevertCleared from a dict
session_next_revert_cleared_from_dict = SessionNextRevertCleared.from_dict(session_next_revert_cleared_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



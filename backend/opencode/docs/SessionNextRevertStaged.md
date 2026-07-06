# SessionNextRevertStaged


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**GlobalEventPayloadAnyOf40Properties**](GlobalEventPayloadAnyOf40Properties.md) |  | 

## Example

```python
from opencode_sdk.models.session_next_revert_staged import SessionNextRevertStaged

# TODO update the JSON string below
json = "{}"
# create an instance of SessionNextRevertStaged from a JSON string
session_next_revert_staged_instance = SessionNextRevertStaged.from_json(json)
# print the JSON string representation of the object
print(SessionNextRevertStaged.to_json())

# convert the object into a dict
session_next_revert_staged_dict = session_next_revert_staged_instance.to_dict()
# create an instance of SessionNextRevertStaged from a dict
session_next_revert_staged_from_dict = SessionNextRevertStaged.from_dict(session_next_revert_staged_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



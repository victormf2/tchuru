# SessionNextCompactionDelta


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**GlobalEventPayloadAnyOf16Properties**](GlobalEventPayloadAnyOf16Properties.md) |  | 

## Example

```python
from opencode_sdk.models.session_next_compaction_delta import SessionNextCompactionDelta

# TODO update the JSON string below
json = "{}"
# create an instance of SessionNextCompactionDelta from a JSON string
session_next_compaction_delta_instance = SessionNextCompactionDelta.from_json(json)
# print the JSON string representation of the object
print(SessionNextCompactionDelta.to_json())

# convert the object into a dict
session_next_compaction_delta_dict = session_next_compaction_delta_instance.to_dict()
# create an instance of SessionNextCompactionDelta from a dict
session_next_compaction_delta_from_dict = SessionNextCompactionDelta.from_dict(session_next_compaction_delta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



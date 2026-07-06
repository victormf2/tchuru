# SessionNextReasoningDelta


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**GlobalEventPayloadAnyOf27Properties**](GlobalEventPayloadAnyOf27Properties.md) |  | 

## Example

```python
from opencode_sdk.models.session_next_reasoning_delta import SessionNextReasoningDelta

# TODO update the JSON string below
json = "{}"
# create an instance of SessionNextReasoningDelta from a JSON string
session_next_reasoning_delta_instance = SessionNextReasoningDelta.from_json(json)
# print the JSON string representation of the object
print(SessionNextReasoningDelta.to_json())

# convert the object into a dict
session_next_reasoning_delta_dict = session_next_reasoning_delta_instance.to_dict()
# create an instance of SessionNextReasoningDelta from a dict
session_next_reasoning_delta_from_dict = SessionNextReasoningDelta.from_dict(session_next_reasoning_delta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



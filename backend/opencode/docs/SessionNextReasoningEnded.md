# SessionNextReasoningEnded


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**GlobalEventPayloadAnyOf28Properties**](GlobalEventPayloadAnyOf28Properties.md) |  | 

## Example

```python
from opencode_sdk.models.session_next_reasoning_ended import SessionNextReasoningEnded

# TODO update the JSON string below
json = "{}"
# create an instance of SessionNextReasoningEnded from a JSON string
session_next_reasoning_ended_instance = SessionNextReasoningEnded.from_json(json)
# print the JSON string representation of the object
print(SessionNextReasoningEnded.to_json())

# convert the object into a dict
session_next_reasoning_ended_dict = session_next_reasoning_ended_instance.to_dict()
# create an instance of SessionNextReasoningEnded from a dict
session_next_reasoning_ended_from_dict = SessionNextReasoningEnded.from_dict(session_next_reasoning_ended_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



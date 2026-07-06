# SessionNextReasoningStarted


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**GlobalEventPayloadAnyOf26Properties**](GlobalEventPayloadAnyOf26Properties.md) |  | 

## Example

```python
from opencode_sdk.models.session_next_reasoning_started import SessionNextReasoningStarted

# TODO update the JSON string below
json = "{}"
# create an instance of SessionNextReasoningStarted from a JSON string
session_next_reasoning_started_instance = SessionNextReasoningStarted.from_json(json)
# print the JSON string representation of the object
print(SessionNextReasoningStarted.to_json())

# convert the object into a dict
session_next_reasoning_started_dict = session_next_reasoning_started_instance.to_dict()
# create an instance of SessionNextReasoningStarted from a dict
session_next_reasoning_started_from_dict = SessionNextReasoningStarted.from_dict(session_next_reasoning_started_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



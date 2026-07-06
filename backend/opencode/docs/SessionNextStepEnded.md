# SessionNextStepEnded


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**GlobalEventPayloadAnyOf21Properties**](GlobalEventPayloadAnyOf21Properties.md) |  | 

## Example

```python
from opencode_sdk.models.session_next_step_ended import SessionNextStepEnded

# TODO update the JSON string below
json = "{}"
# create an instance of SessionNextStepEnded from a JSON string
session_next_step_ended_instance = SessionNextStepEnded.from_json(json)
# print the JSON string representation of the object
print(SessionNextStepEnded.to_json())

# convert the object into a dict
session_next_step_ended_dict = session_next_step_ended_instance.to_dict()
# create an instance of SessionNextStepEnded from a dict
session_next_step_ended_from_dict = SessionNextStepEnded.from_dict(session_next_step_ended_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



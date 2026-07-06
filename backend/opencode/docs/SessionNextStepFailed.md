# SessionNextStepFailed


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**GlobalEventPayloadAnyOf22Properties**](GlobalEventPayloadAnyOf22Properties.md) |  | 

## Example

```python
from opencode_sdk.models.session_next_step_failed import SessionNextStepFailed

# TODO update the JSON string below
json = "{}"
# create an instance of SessionNextStepFailed from a JSON string
session_next_step_failed_instance = SessionNextStepFailed.from_json(json)
# print the JSON string representation of the object
print(SessionNextStepFailed.to_json())

# convert the object into a dict
session_next_step_failed_dict = session_next_step_failed_instance.to_dict()
# create an instance of SessionNextStepFailed from a dict
session_next_step_failed_from_dict = SessionNextStepFailed.from_dict(session_next_step_failed_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



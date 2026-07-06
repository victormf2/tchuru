# EventSessionNextStepEnded


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf21Properties**](GlobalEventPayloadAnyOf21Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_session_next_step_ended import EventSessionNextStepEnded

# TODO update the JSON string below
json = "{}"
# create an instance of EventSessionNextStepEnded from a JSON string
event_session_next_step_ended_instance = EventSessionNextStepEnded.from_json(json)
# print the JSON string representation of the object
print(EventSessionNextStepEnded.to_json())

# convert the object into a dict
event_session_next_step_ended_dict = event_session_next_step_ended_instance.to_dict()
# create an instance of EventSessionNextStepEnded from a dict
event_session_next_step_ended_from_dict = EventSessionNextStepEnded.from_dict(event_session_next_step_ended_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# EventSessionNextStepStarted


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf20Properties**](GlobalEventPayloadAnyOf20Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_session_next_step_started import EventSessionNextStepStarted

# TODO update the JSON string below
json = "{}"
# create an instance of EventSessionNextStepStarted from a JSON string
event_session_next_step_started_instance = EventSessionNextStepStarted.from_json(json)
# print the JSON string representation of the object
print(EventSessionNextStepStarted.to_json())

# convert the object into a dict
event_session_next_step_started_dict = event_session_next_step_started_instance.to_dict()
# create an instance of EventSessionNextStepStarted from a dict
event_session_next_step_started_from_dict = EventSessionNextStepStarted.from_dict(event_session_next_step_started_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



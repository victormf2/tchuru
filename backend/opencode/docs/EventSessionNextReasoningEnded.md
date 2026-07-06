# EventSessionNextReasoningEnded


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf28Properties**](GlobalEventPayloadAnyOf28Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_session_next_reasoning_ended import EventSessionNextReasoningEnded

# TODO update the JSON string below
json = "{}"
# create an instance of EventSessionNextReasoningEnded from a JSON string
event_session_next_reasoning_ended_instance = EventSessionNextReasoningEnded.from_json(json)
# print the JSON string representation of the object
print(EventSessionNextReasoningEnded.to_json())

# convert the object into a dict
event_session_next_reasoning_ended_dict = event_session_next_reasoning_ended_instance.to_dict()
# create an instance of EventSessionNextReasoningEnded from a dict
event_session_next_reasoning_ended_from_dict = EventSessionNextReasoningEnded.from_dict(event_session_next_reasoning_ended_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



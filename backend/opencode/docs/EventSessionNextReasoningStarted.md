# EventSessionNextReasoningStarted


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf26Properties**](GlobalEventPayloadAnyOf26Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_session_next_reasoning_started import EventSessionNextReasoningStarted

# TODO update the JSON string below
json = "{}"
# create an instance of EventSessionNextReasoningStarted from a JSON string
event_session_next_reasoning_started_instance = EventSessionNextReasoningStarted.from_json(json)
# print the JSON string representation of the object
print(EventSessionNextReasoningStarted.to_json())

# convert the object into a dict
event_session_next_reasoning_started_dict = event_session_next_reasoning_started_instance.to_dict()
# create an instance of EventSessionNextReasoningStarted from a dict
event_session_next_reasoning_started_from_dict = EventSessionNextReasoningStarted.from_dict(event_session_next_reasoning_started_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



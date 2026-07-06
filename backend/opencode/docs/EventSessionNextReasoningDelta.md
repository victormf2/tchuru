# EventSessionNextReasoningDelta


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf27Properties**](GlobalEventPayloadAnyOf27Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_session_next_reasoning_delta import EventSessionNextReasoningDelta

# TODO update the JSON string below
json = "{}"
# create an instance of EventSessionNextReasoningDelta from a JSON string
event_session_next_reasoning_delta_instance = EventSessionNextReasoningDelta.from_json(json)
# print the JSON string representation of the object
print(EventSessionNextReasoningDelta.to_json())

# convert the object into a dict
event_session_next_reasoning_delta_dict = event_session_next_reasoning_delta_instance.to_dict()
# create an instance of EventSessionNextReasoningDelta from a dict
event_session_next_reasoning_delta_from_dict = EventSessionNextReasoningDelta.from_dict(event_session_next_reasoning_delta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



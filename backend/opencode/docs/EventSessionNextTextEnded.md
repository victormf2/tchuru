# EventSessionNextTextEnded


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf25Properties**](GlobalEventPayloadAnyOf25Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_session_next_text_ended import EventSessionNextTextEnded

# TODO update the JSON string below
json = "{}"
# create an instance of EventSessionNextTextEnded from a JSON string
event_session_next_text_ended_instance = EventSessionNextTextEnded.from_json(json)
# print the JSON string representation of the object
print(EventSessionNextTextEnded.to_json())

# convert the object into a dict
event_session_next_text_ended_dict = event_session_next_text_ended_instance.to_dict()
# create an instance of EventSessionNextTextEnded from a dict
event_session_next_text_ended_from_dict = EventSessionNextTextEnded.from_dict(event_session_next_text_ended_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



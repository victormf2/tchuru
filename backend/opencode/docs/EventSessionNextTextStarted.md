# EventSessionNextTextStarted


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf23Properties**](GlobalEventPayloadAnyOf23Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_session_next_text_started import EventSessionNextTextStarted

# TODO update the JSON string below
json = "{}"
# create an instance of EventSessionNextTextStarted from a JSON string
event_session_next_text_started_instance = EventSessionNextTextStarted.from_json(json)
# print the JSON string representation of the object
print(EventSessionNextTextStarted.to_json())

# convert the object into a dict
event_session_next_text_started_dict = event_session_next_text_started_instance.to_dict()
# create an instance of EventSessionNextTextStarted from a dict
event_session_next_text_started_from_dict = EventSessionNextTextStarted.from_dict(event_session_next_text_started_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



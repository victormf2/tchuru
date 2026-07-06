# EventSessionNextTextDelta


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf24Properties**](GlobalEventPayloadAnyOf24Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_session_next_text_delta import EventSessionNextTextDelta

# TODO update the JSON string below
json = "{}"
# create an instance of EventSessionNextTextDelta from a JSON string
event_session_next_text_delta_instance = EventSessionNextTextDelta.from_json(json)
# print the JSON string representation of the object
print(EventSessionNextTextDelta.to_json())

# convert the object into a dict
event_session_next_text_delta_dict = event_session_next_text_delta_instance.to_dict()
# create an instance of EventSessionNextTextDelta from a dict
event_session_next_text_delta_from_dict = EventSessionNextTextDelta.from_dict(event_session_next_text_delta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



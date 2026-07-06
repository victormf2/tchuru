# EventSessionNextCompactionEnded


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf39Properties**](GlobalEventPayloadAnyOf39Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_session_next_compaction_ended import EventSessionNextCompactionEnded

# TODO update the JSON string below
json = "{}"
# create an instance of EventSessionNextCompactionEnded from a JSON string
event_session_next_compaction_ended_instance = EventSessionNextCompactionEnded.from_json(json)
# print the JSON string representation of the object
print(EventSessionNextCompactionEnded.to_json())

# convert the object into a dict
event_session_next_compaction_ended_dict = event_session_next_compaction_ended_instance.to_dict()
# create an instance of EventSessionNextCompactionEnded from a dict
event_session_next_compaction_ended_from_dict = EventSessionNextCompactionEnded.from_dict(event_session_next_compaction_ended_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



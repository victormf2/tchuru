# EventSessionNextCompactionStarted


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf37Properties**](GlobalEventPayloadAnyOf37Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_session_next_compaction_started import EventSessionNextCompactionStarted

# TODO update the JSON string below
json = "{}"
# create an instance of EventSessionNextCompactionStarted from a JSON string
event_session_next_compaction_started_instance = EventSessionNextCompactionStarted.from_json(json)
# print the JSON string representation of the object
print(EventSessionNextCompactionStarted.to_json())

# convert the object into a dict
event_session_next_compaction_started_dict = event_session_next_compaction_started_instance.to_dict()
# create an instance of EventSessionNextCompactionStarted from a dict
event_session_next_compaction_started_from_dict = EventSessionNextCompactionStarted.from_dict(event_session_next_compaction_started_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# EventSessionNextCompactionDelta


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf16Properties**](GlobalEventPayloadAnyOf16Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_session_next_compaction_delta import EventSessionNextCompactionDelta

# TODO update the JSON string below
json = "{}"
# create an instance of EventSessionNextCompactionDelta from a JSON string
event_session_next_compaction_delta_instance = EventSessionNextCompactionDelta.from_json(json)
# print the JSON string representation of the object
print(EventSessionNextCompactionDelta.to_json())

# convert the object into a dict
event_session_next_compaction_delta_dict = event_session_next_compaction_delta_instance.to_dict()
# create an instance of EventSessionNextCompactionDelta from a dict
event_session_next_compaction_delta_from_dict = EventSessionNextCompactionDelta.from_dict(event_session_next_compaction_delta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



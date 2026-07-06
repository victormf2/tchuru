# EventSessionNextMoved


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf13Properties**](GlobalEventPayloadAnyOf13Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_session_next_moved import EventSessionNextMoved

# TODO update the JSON string below
json = "{}"
# create an instance of EventSessionNextMoved from a JSON string
event_session_next_moved_instance = EventSessionNextMoved.from_json(json)
# print the JSON string representation of the object
print(EventSessionNextMoved.to_json())

# convert the object into a dict
event_session_next_moved_dict = event_session_next_moved_instance.to_dict()
# create an instance of EventSessionNextMoved from a dict
event_session_next_moved_from_dict = EventSessionNextMoved.from_dict(event_session_next_moved_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



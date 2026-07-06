# EventSessionNextPrompted


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf14Properties**](GlobalEventPayloadAnyOf14Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_session_next_prompted import EventSessionNextPrompted

# TODO update the JSON string below
json = "{}"
# create an instance of EventSessionNextPrompted from a JSON string
event_session_next_prompted_instance = EventSessionNextPrompted.from_json(json)
# print the JSON string representation of the object
print(EventSessionNextPrompted.to_json())

# convert the object into a dict
event_session_next_prompted_dict = event_session_next_prompted_instance.to_dict()
# create an instance of EventSessionNextPrompted from a dict
event_session_next_prompted_from_dict = EventSessionNextPrompted.from_dict(event_session_next_prompted_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



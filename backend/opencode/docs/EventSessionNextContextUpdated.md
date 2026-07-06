# EventSessionNextContextUpdated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf16Properties**](GlobalEventPayloadAnyOf16Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_session_next_context_updated import EventSessionNextContextUpdated

# TODO update the JSON string below
json = "{}"
# create an instance of EventSessionNextContextUpdated from a JSON string
event_session_next_context_updated_instance = EventSessionNextContextUpdated.from_json(json)
# print the JSON string representation of the object
print(EventSessionNextContextUpdated.to_json())

# convert the object into a dict
event_session_next_context_updated_dict = event_session_next_context_updated_instance.to_dict()
# create an instance of EventSessionNextContextUpdated from a dict
event_session_next_context_updated_from_dict = EventSessionNextContextUpdated.from_dict(event_session_next_context_updated_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# EventSessionNextSynthetic


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf16Properties**](GlobalEventPayloadAnyOf16Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_session_next_synthetic import EventSessionNextSynthetic

# TODO update the JSON string below
json = "{}"
# create an instance of EventSessionNextSynthetic from a JSON string
event_session_next_synthetic_instance = EventSessionNextSynthetic.from_json(json)
# print the JSON string representation of the object
print(EventSessionNextSynthetic.to_json())

# convert the object into a dict
event_session_next_synthetic_dict = event_session_next_synthetic_instance.to_dict()
# create an instance of EventSessionNextSynthetic from a dict
event_session_next_synthetic_from_dict = EventSessionNextSynthetic.from_dict(event_session_next_synthetic_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



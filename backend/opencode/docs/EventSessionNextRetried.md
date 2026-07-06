# EventSessionNextRetried


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf36Properties**](GlobalEventPayloadAnyOf36Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_session_next_retried import EventSessionNextRetried

# TODO update the JSON string below
json = "{}"
# create an instance of EventSessionNextRetried from a JSON string
event_session_next_retried_instance = EventSessionNextRetried.from_json(json)
# print the JSON string representation of the object
print(EventSessionNextRetried.to_json())

# convert the object into a dict
event_session_next_retried_dict = event_session_next_retried_instance.to_dict()
# create an instance of EventSessionNextRetried from a dict
event_session_next_retried_from_dict = EventSessionNextRetried.from_dict(event_session_next_retried_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



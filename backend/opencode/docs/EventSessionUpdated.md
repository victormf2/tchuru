# EventSessionUpdated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf4Properties**](GlobalEventPayloadAnyOf4Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_session_updated import EventSessionUpdated

# TODO update the JSON string below
json = "{}"
# create an instance of EventSessionUpdated from a JSON string
event_session_updated_instance = EventSessionUpdated.from_json(json)
# print the JSON string representation of the object
print(EventSessionUpdated.to_json())

# convert the object into a dict
event_session_updated_dict = event_session_updated_instance.to_dict()
# create an instance of EventSessionUpdated from a dict
event_session_updated_from_dict = EventSessionUpdated.from_dict(event_session_updated_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



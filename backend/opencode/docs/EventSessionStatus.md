# EventSessionStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf74Properties**](GlobalEventPayloadAnyOf74Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_session_status import EventSessionStatus

# TODO update the JSON string below
json = "{}"
# create an instance of EventSessionStatus from a JSON string
event_session_status_instance = EventSessionStatus.from_json(json)
# print the JSON string representation of the object
print(EventSessionStatus.to_json())

# convert the object into a dict
event_session_status_dict = event_session_status_instance.to_dict()
# create an instance of EventSessionStatus from a dict
event_session_status_from_dict = EventSessionStatus.from_dict(event_session_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



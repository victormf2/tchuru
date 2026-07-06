# EventSessionError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf45Properties**](GlobalEventPayloadAnyOf45Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_session_error import EventSessionError

# TODO update the JSON string below
json = "{}"
# create an instance of EventSessionError from a JSON string
event_session_error_instance = EventSessionError.from_json(json)
# print the JSON string representation of the object
print(EventSessionError.to_json())

# convert the object into a dict
event_session_error_dict = event_session_error_instance.to_dict()
# create an instance of EventSessionError from a dict
event_session_error_from_dict = EventSessionError.from_dict(event_session_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



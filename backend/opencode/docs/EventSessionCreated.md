# EventSessionCreated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf4Properties**](GlobalEventPayloadAnyOf4Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_session_created import EventSessionCreated

# TODO update the JSON string below
json = "{}"
# create an instance of EventSessionCreated from a JSON string
event_session_created_instance = EventSessionCreated.from_json(json)
# print the JSON string representation of the object
print(EventSessionCreated.to_json())

# convert the object into a dict
event_session_created_dict = event_session_created_instance.to_dict()
# create an instance of EventSessionCreated from a dict
event_session_created_from_dict = EventSessionCreated.from_dict(event_session_created_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



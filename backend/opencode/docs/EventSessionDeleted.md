# EventSessionDeleted


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf4Properties**](GlobalEventPayloadAnyOf4Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_session_deleted import EventSessionDeleted

# TODO update the JSON string below
json = "{}"
# create an instance of EventSessionDeleted from a JSON string
event_session_deleted_instance = EventSessionDeleted.from_json(json)
# print the JSON string representation of the object
print(EventSessionDeleted.to_json())

# convert the object into a dict
event_session_deleted_dict = event_session_deleted_instance.to_dict()
# create an instance of EventSessionDeleted from a dict
event_session_deleted_from_dict = EventSessionDeleted.from_dict(event_session_deleted_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# EventPermissionAsked


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf64Properties**](GlobalEventPayloadAnyOf64Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_permission_asked import EventPermissionAsked

# TODO update the JSON string below
json = "{}"
# create an instance of EventPermissionAsked from a JSON string
event_permission_asked_instance = EventPermissionAsked.from_json(json)
# print the JSON string representation of the object
print(EventPermissionAsked.to_json())

# convert the object into a dict
event_permission_asked_dict = event_permission_asked_instance.to_dict()
# create an instance of EventPermissionAsked from a dict
event_permission_asked_from_dict = EventPermissionAsked.from_dict(event_permission_asked_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# EventPermissionV2Asked


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf50Properties**](GlobalEventPayloadAnyOf50Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_permission_v2_asked import EventPermissionV2Asked

# TODO update the JSON string below
json = "{}"
# create an instance of EventPermissionV2Asked from a JSON string
event_permission_v2_asked_instance = EventPermissionV2Asked.from_json(json)
# print the JSON string representation of the object
print(EventPermissionV2Asked.to_json())

# convert the object into a dict
event_permission_v2_asked_dict = event_permission_v2_asked_instance.to_dict()
# create an instance of EventPermissionV2Asked from a dict
event_permission_v2_asked_from_dict = EventPermissionV2Asked.from_dict(event_permission_v2_asked_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



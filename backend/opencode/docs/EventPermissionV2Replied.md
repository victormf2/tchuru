# EventPermissionV2Replied


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf51Properties**](GlobalEventPayloadAnyOf51Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_permission_v2_replied import EventPermissionV2Replied

# TODO update the JSON string below
json = "{}"
# create an instance of EventPermissionV2Replied from a JSON string
event_permission_v2_replied_instance = EventPermissionV2Replied.from_json(json)
# print the JSON string representation of the object
print(EventPermissionV2Replied.to_json())

# convert the object into a dict
event_permission_v2_replied_dict = event_permission_v2_replied_instance.to_dict()
# create an instance of EventPermissionV2Replied from a dict
event_permission_v2_replied_from_dict = EventPermissionV2Replied.from_dict(event_permission_v2_replied_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# EventPermissionReplied


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf65Properties**](GlobalEventPayloadAnyOf65Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_permission_replied import EventPermissionReplied

# TODO update the JSON string below
json = "{}"
# create an instance of EventPermissionReplied from a JSON string
event_permission_replied_instance = EventPermissionReplied.from_json(json)
# print the JSON string representation of the object
print(EventPermissionReplied.to_json())

# convert the object into a dict
event_permission_replied_dict = event_permission_replied_instance.to_dict()
# create an instance of EventPermissionReplied from a dict
event_permission_replied_from_dict = EventPermissionReplied.from_dict(event_permission_replied_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



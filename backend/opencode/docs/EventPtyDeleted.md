# EventPtyDeleted


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf58Properties**](GlobalEventPayloadAnyOf58Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_pty_deleted import EventPtyDeleted

# TODO update the JSON string below
json = "{}"
# create an instance of EventPtyDeleted from a JSON string
event_pty_deleted_instance = EventPtyDeleted.from_json(json)
# print the JSON string representation of the object
print(EventPtyDeleted.to_json())

# convert the object into a dict
event_pty_deleted_dict = event_pty_deleted_instance.to_dict()
# create an instance of EventPtyDeleted from a dict
event_pty_deleted_from_dict = EventPtyDeleted.from_dict(event_pty_deleted_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



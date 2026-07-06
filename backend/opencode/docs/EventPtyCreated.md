# EventPtyCreated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf55Properties**](GlobalEventPayloadAnyOf55Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_pty_created import EventPtyCreated

# TODO update the JSON string below
json = "{}"
# create an instance of EventPtyCreated from a JSON string
event_pty_created_instance = EventPtyCreated.from_json(json)
# print the JSON string representation of the object
print(EventPtyCreated.to_json())

# convert the object into a dict
event_pty_created_dict = event_pty_created_instance.to_dict()
# create an instance of EventPtyCreated from a dict
event_pty_created_from_dict = EventPtyCreated.from_dict(event_pty_created_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# EventPtyUpdated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf55Properties**](GlobalEventPayloadAnyOf55Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_pty_updated import EventPtyUpdated

# TODO update the JSON string below
json = "{}"
# create an instance of EventPtyUpdated from a JSON string
event_pty_updated_instance = EventPtyUpdated.from_json(json)
# print the JSON string representation of the object
print(EventPtyUpdated.to_json())

# convert the object into a dict
event_pty_updated_dict = event_pty_updated_instance.to_dict()
# create an instance of EventPtyUpdated from a dict
event_pty_updated_from_dict = EventPtyUpdated.from_dict(event_pty_updated_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



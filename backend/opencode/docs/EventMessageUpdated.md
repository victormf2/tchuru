# EventMessageUpdated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf7Properties**](GlobalEventPayloadAnyOf7Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_message_updated import EventMessageUpdated

# TODO update the JSON string below
json = "{}"
# create an instance of EventMessageUpdated from a JSON string
event_message_updated_instance = EventMessageUpdated.from_json(json)
# print the JSON string representation of the object
print(EventMessageUpdated.to_json())

# convert the object into a dict
event_message_updated_dict = event_message_updated_instance.to_dict()
# create an instance of EventMessageUpdated from a dict
event_message_updated_from_dict = EventMessageUpdated.from_dict(event_message_updated_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



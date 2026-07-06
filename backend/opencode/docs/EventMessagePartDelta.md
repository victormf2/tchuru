# EventMessagePartDelta


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf43Properties**](GlobalEventPayloadAnyOf43Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_message_part_delta import EventMessagePartDelta

# TODO update the JSON string below
json = "{}"
# create an instance of EventMessagePartDelta from a JSON string
event_message_part_delta_instance = EventMessagePartDelta.from_json(json)
# print the JSON string representation of the object
print(EventMessagePartDelta.to_json())

# convert the object into a dict
event_message_part_delta_dict = event_message_part_delta_instance.to_dict()
# create an instance of EventMessagePartDelta from a dict
event_message_part_delta_from_dict = EventMessagePartDelta.from_dict(event_message_part_delta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



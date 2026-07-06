# EventMessagePartRemoved


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf10Properties**](GlobalEventPayloadAnyOf10Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_message_part_removed import EventMessagePartRemoved

# TODO update the JSON string below
json = "{}"
# create an instance of EventMessagePartRemoved from a JSON string
event_message_part_removed_instance = EventMessagePartRemoved.from_json(json)
# print the JSON string representation of the object
print(EventMessagePartRemoved.to_json())

# convert the object into a dict
event_message_part_removed_dict = event_message_part_removed_instance.to_dict()
# create an instance of EventMessagePartRemoved from a dict
event_message_part_removed_from_dict = EventMessagePartRemoved.from_dict(event_message_part_removed_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



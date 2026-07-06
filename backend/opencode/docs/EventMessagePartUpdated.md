# EventMessagePartUpdated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf9Properties**](GlobalEventPayloadAnyOf9Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_message_part_updated import EventMessagePartUpdated

# TODO update the JSON string below
json = "{}"
# create an instance of EventMessagePartUpdated from a JSON string
event_message_part_updated_instance = EventMessagePartUpdated.from_json(json)
# print the JSON string representation of the object
print(EventMessagePartUpdated.to_json())

# convert the object into a dict
event_message_part_updated_dict = event_message_part_updated_instance.to_dict()
# create an instance of EventMessagePartUpdated from a dict
event_message_part_updated_from_dict = EventMessagePartUpdated.from_dict(event_message_part_updated_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



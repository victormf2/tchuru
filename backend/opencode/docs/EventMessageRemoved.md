# EventMessageRemoved


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf8Properties**](GlobalEventPayloadAnyOf8Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_message_removed import EventMessageRemoved

# TODO update the JSON string below
json = "{}"
# create an instance of EventMessageRemoved from a JSON string
event_message_removed_instance = EventMessageRemoved.from_json(json)
# print the JSON string representation of the object
print(EventMessageRemoved.to_json())

# convert the object into a dict
event_message_removed_dict = event_message_removed_instance.to_dict()
# create an instance of EventMessageRemoved from a dict
event_message_removed_from_dict = EventMessageRemoved.from_dict(event_message_removed_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



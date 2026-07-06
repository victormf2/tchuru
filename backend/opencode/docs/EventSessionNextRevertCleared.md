# EventSessionNextRevertCleared


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf41Properties**](GlobalEventPayloadAnyOf41Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_session_next_revert_cleared import EventSessionNextRevertCleared

# TODO update the JSON string below
json = "{}"
# create an instance of EventSessionNextRevertCleared from a JSON string
event_session_next_revert_cleared_instance = EventSessionNextRevertCleared.from_json(json)
# print the JSON string representation of the object
print(EventSessionNextRevertCleared.to_json())

# convert the object into a dict
event_session_next_revert_cleared_dict = event_session_next_revert_cleared_instance.to_dict()
# create an instance of EventSessionNextRevertCleared from a dict
event_session_next_revert_cleared_from_dict = EventSessionNextRevertCleared.from_dict(event_session_next_revert_cleared_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



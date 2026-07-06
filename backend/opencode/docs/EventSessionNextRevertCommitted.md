# EventSessionNextRevertCommitted


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf42Properties**](GlobalEventPayloadAnyOf42Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_session_next_revert_committed import EventSessionNextRevertCommitted

# TODO update the JSON string below
json = "{}"
# create an instance of EventSessionNextRevertCommitted from a JSON string
event_session_next_revert_committed_instance = EventSessionNextRevertCommitted.from_json(json)
# print the JSON string representation of the object
print(EventSessionNextRevertCommitted.to_json())

# convert the object into a dict
event_session_next_revert_committed_dict = event_session_next_revert_committed_instance.to_dict()
# create an instance of EventSessionNextRevertCommitted from a dict
event_session_next_revert_committed_from_dict = EventSessionNextRevertCommitted.from_dict(event_session_next_revert_committed_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



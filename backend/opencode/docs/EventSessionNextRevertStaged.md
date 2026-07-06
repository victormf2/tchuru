# EventSessionNextRevertStaged


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf40Properties**](GlobalEventPayloadAnyOf40Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_session_next_revert_staged import EventSessionNextRevertStaged

# TODO update the JSON string below
json = "{}"
# create an instance of EventSessionNextRevertStaged from a JSON string
event_session_next_revert_staged_instance = EventSessionNextRevertStaged.from_json(json)
# print the JSON string representation of the object
print(EventSessionNextRevertStaged.to_json())

# convert the object into a dict
event_session_next_revert_staged_dict = event_session_next_revert_staged_instance.to_dict()
# create an instance of EventSessionNextRevertStaged from a dict
event_session_next_revert_staged_from_dict = EventSessionNextRevertStaged.from_dict(event_session_next_revert_staged_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



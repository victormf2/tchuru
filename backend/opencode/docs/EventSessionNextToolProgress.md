# EventSessionNextToolProgress


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf33Properties**](GlobalEventPayloadAnyOf33Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_session_next_tool_progress import EventSessionNextToolProgress

# TODO update the JSON string below
json = "{}"
# create an instance of EventSessionNextToolProgress from a JSON string
event_session_next_tool_progress_instance = EventSessionNextToolProgress.from_json(json)
# print the JSON string representation of the object
print(EventSessionNextToolProgress.to_json())

# convert the object into a dict
event_session_next_tool_progress_dict = event_session_next_tool_progress_instance.to_dict()
# create an instance of EventSessionNextToolProgress from a dict
event_session_next_tool_progress_from_dict = EventSessionNextToolProgress.from_dict(event_session_next_tool_progress_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



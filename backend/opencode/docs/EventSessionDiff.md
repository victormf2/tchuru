# EventSessionDiff


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf44Properties**](GlobalEventPayloadAnyOf44Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_session_diff import EventSessionDiff

# TODO update the JSON string below
json = "{}"
# create an instance of EventSessionDiff from a JSON string
event_session_diff_instance = EventSessionDiff.from_json(json)
# print the JSON string representation of the object
print(EventSessionDiff.to_json())

# convert the object into a dict
event_session_diff_dict = event_session_diff_instance.to_dict()
# create an instance of EventSessionDiff from a dict
event_session_diff_from_dict = EventSessionDiff.from_dict(event_session_diff_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# EventTuiSessionSelect


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**TuiSelectSessionRequest**](TuiSelectSessionRequest.md) |  | 

## Example

```python
from opencode_sdk.models.event_tui_session_select import EventTuiSessionSelect

# TODO update the JSON string below
json = "{}"
# create an instance of EventTuiSessionSelect from a JSON string
event_tui_session_select_instance = EventTuiSessionSelect.from_json(json)
# print the JSON string representation of the object
print(EventTuiSessionSelect.to_json())

# convert the object into a dict
event_tui_session_select_dict = event_tui_session_select_instance.to_dict()
# create an instance of EventTuiSessionSelect from a dict
event_tui_session_select_from_dict = EventTuiSessionSelect.from_dict(event_tui_session_select_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



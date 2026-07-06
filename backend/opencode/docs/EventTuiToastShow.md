# EventTuiToastShow


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**TuiShowToastRequest**](TuiShowToastRequest.md) |  | 

## Example

```python
from opencode_sdk.models.event_tui_toast_show import EventTuiToastShow

# TODO update the JSON string below
json = "{}"
# create an instance of EventTuiToastShow from a JSON string
event_tui_toast_show_instance = EventTuiToastShow.from_json(json)
# print the JSON string representation of the object
print(EventTuiToastShow.to_json())

# convert the object into a dict
event_tui_toast_show_dict = event_tui_toast_show_instance.to_dict()
# create an instance of EventTuiToastShow from a dict
event_tui_toast_show_from_dict = EventTuiToastShow.from_dict(event_tui_toast_show_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# EventTuiPromptAppend


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**FindText200ResponseInnerPath**](FindText200ResponseInnerPath.md) |  | 

## Example

```python
from opencode_sdk.models.event_tui_prompt_append import EventTuiPromptAppend

# TODO update the JSON string below
json = "{}"
# create an instance of EventTuiPromptAppend from a JSON string
event_tui_prompt_append_instance = EventTuiPromptAppend.from_json(json)
# print the JSON string representation of the object
print(EventTuiPromptAppend.to_json())

# convert the object into a dict
event_tui_prompt_append_dict = event_tui_prompt_append_instance.to_dict()
# create an instance of EventTuiPromptAppend from a dict
event_tui_prompt_append_from_dict = EventTuiPromptAppend.from_dict(event_tui_prompt_append_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



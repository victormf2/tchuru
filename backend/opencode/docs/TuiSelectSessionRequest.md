# TuiSelectSessionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**session_id** | **str** | Session ID to navigate to | 

## Example

```python
from opencode_sdk.models.tui_select_session_request import TuiSelectSessionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TuiSelectSessionRequest from a JSON string
tui_select_session_request_instance = TuiSelectSessionRequest.from_json(json)
# print the JSON string representation of the object
print(TuiSelectSessionRequest.to_json())

# convert the object into a dict
tui_select_session_request_dict = tui_select_session_request_instance.to_dict()
# create an instance of TuiSelectSessionRequest from a dict
tui_select_session_request_from_dict = TuiSelectSessionRequest.from_dict(tui_select_session_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



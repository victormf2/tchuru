# TuiShowToastRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **str** |  | [optional] 
**message** | **str** |  | 
**variant** | **str** |  | 
**duration** | **int** |  | [optional] 

## Example

```python
from opencode_sdk.models.tui_show_toast_request import TuiShowToastRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TuiShowToastRequest from a JSON string
tui_show_toast_request_instance = TuiShowToastRequest.from_json(json)
# print the JSON string representation of the object
print(TuiShowToastRequest.to_json())

# convert the object into a dict
tui_show_toast_request_dict = tui_show_toast_request_instance.to_dict()
# create an instance of TuiShowToastRequest from a dict
tui_show_toast_request_from_dict = TuiShowToastRequest.from_dict(tui_show_toast_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



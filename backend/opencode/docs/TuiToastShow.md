# TuiToastShow


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**TuiShowToastRequest**](TuiShowToastRequest.md) |  | 

## Example

```python
from opencode_sdk.models.tui_toast_show import TuiToastShow

# TODO update the JSON string below
json = "{}"
# create an instance of TuiToastShow from a JSON string
tui_toast_show_instance = TuiToastShow.from_json(json)
# print the JSON string representation of the object
print(TuiToastShow.to_json())

# convert the object into a dict
tui_toast_show_dict = tui_toast_show_instance.to_dict()
# create an instance of TuiToastShow from a dict
tui_toast_show_from_dict = TuiToastShow.from_dict(tui_toast_show_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# TuiSessionSelect


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**TuiSelectSessionRequest**](TuiSelectSessionRequest.md) |  | 

## Example

```python
from opencode_sdk.models.tui_session_select import TuiSessionSelect

# TODO update the JSON string below
json = "{}"
# create an instance of TuiSessionSelect from a JSON string
tui_session_select_instance = TuiSessionSelect.from_json(json)
# print the JSON string representation of the object
print(TuiSessionSelect.to_json())

# convert the object into a dict
tui_session_select_dict = tui_session_select_instance.to_dict()
# create an instance of TuiSessionSelect from a dict
tui_session_select_from_dict = TuiSessionSelect.from_dict(tui_session_select_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



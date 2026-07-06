# TuiPromptAppend


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**FindText200ResponseInnerPath**](FindText200ResponseInnerPath.md) |  | 

## Example

```python
from opencode_sdk.models.tui_prompt_append import TuiPromptAppend

# TODO update the JSON string below
json = "{}"
# create an instance of TuiPromptAppend from a JSON string
tui_prompt_append_instance = TuiPromptAppend.from_json(json)
# print the JSON string representation of the object
print(TuiPromptAppend.to_json())

# convert the object into a dict
tui_prompt_append_dict = tui_prompt_append_instance.to_dict()
# create an instance of TuiPromptAppend from a dict
tui_prompt_append_from_dict = TuiPromptAppend.from_dict(tui_prompt_append_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



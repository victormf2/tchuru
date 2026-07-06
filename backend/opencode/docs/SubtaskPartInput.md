# SubtaskPartInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**type** | **str** |  | 
**prompt** | **str** |  | 
**description** | **str** |  | 
**agent** | **str** |  | 
**model** | [**SessionPromptAsyncRequestModel**](SessionPromptAsyncRequestModel.md) |  | [optional] 
**command** | **str** |  | [optional] 

## Example

```python
from opencode_sdk.models.subtask_part_input import SubtaskPartInput

# TODO update the JSON string below
json = "{}"
# create an instance of SubtaskPartInput from a JSON string
subtask_part_input_instance = SubtaskPartInput.from_json(json)
# print the JSON string representation of the object
print(SubtaskPartInput.to_json())

# convert the object into a dict
subtask_part_input_dict = subtask_part_input_instance.to_dict()
# create an instance of SubtaskPartInput from a dict
subtask_part_input_from_dict = SubtaskPartInput.from_dict(subtask_part_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



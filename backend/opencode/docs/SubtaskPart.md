# SubtaskPart


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**session_id** | **str** |  | 
**message_id** | **str** |  | 
**type** | **str** |  | 
**prompt** | **str** |  | 
**description** | **str** |  | 
**agent** | **str** |  | 
**model** | [**SessionPromptAsyncRequestModel**](SessionPromptAsyncRequestModel.md) |  | [optional] 
**command** | **str** |  | [optional] 

## Example

```python
from opencode_sdk.models.subtask_part import SubtaskPart

# TODO update the JSON string below
json = "{}"
# create an instance of SubtaskPart from a JSON string
subtask_part_instance = SubtaskPart.from_json(json)
# print the JSON string representation of the object
print(SubtaskPart.to_json())

# convert the object into a dict
subtask_part_dict = subtask_part_instance.to_dict()
# create an instance of SubtaskPart from a dict
subtask_part_from_dict = SubtaskPart.from_dict(subtask_part_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



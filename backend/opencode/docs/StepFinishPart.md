# StepFinishPart


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**session_id** | **str** |  | 
**message_id** | **str** |  | 
**type** | **str** |  | 
**reason** | **str** |  | 
**snapshot** | **str** |  | [optional] 
**cost** | **float** |  | 
**tokens** | [**AssistantMessageTokens**](AssistantMessageTokens.md) |  | 

## Example

```python
from opencode_sdk.models.step_finish_part import StepFinishPart

# TODO update the JSON string below
json = "{}"
# create an instance of StepFinishPart from a JSON string
step_finish_part_instance = StepFinishPart.from_json(json)
# print the JSON string representation of the object
print(StepFinishPart.to_json())

# convert the object into a dict
step_finish_part_dict = step_finish_part_instance.to_dict()
# create an instance of StepFinishPart from a dict
step_finish_part_from_dict = StepFinishPart.from_dict(step_finish_part_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



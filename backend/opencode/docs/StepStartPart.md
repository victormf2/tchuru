# StepStartPart


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**session_id** | **str** |  | 
**message_id** | **str** |  | 
**type** | **str** |  | 
**snapshot** | **str** |  | [optional] 

## Example

```python
from opencode_sdk.models.step_start_part import StepStartPart

# TODO update the JSON string below
json = "{}"
# create an instance of StepStartPart from a JSON string
step_start_part_instance = StepStartPart.from_json(json)
# print the JSON string representation of the object
print(StepStartPart.to_json())

# convert the object into a dict
step_start_part_dict = step_start_part_instance.to_dict()
# create an instance of StepStartPart from a dict
step_start_part_from_dict = StepStartPart.from_dict(step_start_part_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



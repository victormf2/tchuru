# QuestionV2Info


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**question** | **str** | Complete question | 
**header** | **str** | Very short label (max 30 chars) | 
**options** | [**List[QuestionV2Option]**](QuestionV2Option.md) | Available choices | 
**multiple** | **bool** |  | [optional] 
**custom** | **bool** |  | [optional] 

## Example

```python
from opencode_sdk.models.question_v2_info import QuestionV2Info

# TODO update the JSON string below
json = "{}"
# create an instance of QuestionV2Info from a JSON string
question_v2_info_instance = QuestionV2Info.from_json(json)
# print the JSON string representation of the object
print(QuestionV2Info.to_json())

# convert the object into a dict
question_v2_info_dict = question_v2_info_instance.to_dict()
# create an instance of QuestionV2Info from a dict
question_v2_info_from_dict = QuestionV2Info.from_dict(question_v2_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



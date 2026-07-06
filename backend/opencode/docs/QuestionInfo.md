# QuestionInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**question** | **str** | Complete question | 
**header** | **str** | Very short label (max 30 chars) | 
**options** | [**List[QuestionOption]**](QuestionOption.md) | Available choices | 
**multiple** | **bool** |  | [optional] 
**custom** | **bool** |  | [optional] 

## Example

```python
from opencode_sdk.models.question_info import QuestionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of QuestionInfo from a JSON string
question_info_instance = QuestionInfo.from_json(json)
# print the JSON string representation of the object
print(QuestionInfo.to_json())

# convert the object into a dict
question_info_dict = question_info_instance.to_dict()
# create an instance of QuestionInfo from a dict
question_info_from_dict = QuestionInfo.from_dict(question_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



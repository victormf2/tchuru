# QuestionOption


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **str** | Display text (1-5 words, concise) | 
**description** | **str** | Explanation of choice | 

## Example

```python
from opencode_sdk.models.question_option import QuestionOption

# TODO update the JSON string below
json = "{}"
# create an instance of QuestionOption from a JSON string
question_option_instance = QuestionOption.from_json(json)
# print the JSON string representation of the object
print(QuestionOption.to_json())

# convert the object into a dict
question_option_dict = question_option_instance.to_dict()
# create an instance of QuestionOption from a dict
question_option_from_dict = QuestionOption.from_dict(question_option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



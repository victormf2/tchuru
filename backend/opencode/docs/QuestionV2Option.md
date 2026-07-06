# QuestionV2Option


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **str** | Display text (1-5 words, concise) | 
**description** | **str** | Explanation of choice | 

## Example

```python
from opencode_sdk.models.question_v2_option import QuestionV2Option

# TODO update the JSON string below
json = "{}"
# create an instance of QuestionV2Option from a JSON string
question_v2_option_instance = QuestionV2Option.from_json(json)
# print the JSON string representation of the object
print(QuestionV2Option.to_json())

# convert the object into a dict
question_v2_option_dict = question_v2_option_instance.to_dict()
# create an instance of QuestionV2Option from a dict
question_v2_option_from_dict = QuestionV2Option.from_dict(question_v2_option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



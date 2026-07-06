# QuestionV2Reply


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**answers** | **List[List[str]]** | User answers in order of questions (each answer is an array of selected labels) | 

## Example

```python
from opencode_sdk.models.question_v2_reply import QuestionV2Reply

# TODO update the JSON string below
json = "{}"
# create an instance of QuestionV2Reply from a JSON string
question_v2_reply_instance = QuestionV2Reply.from_json(json)
# print the JSON string representation of the object
print(QuestionV2Reply.to_json())

# convert the object into a dict
question_v2_reply_dict = question_v2_reply_instance.to_dict()
# create an instance of QuestionV2Reply from a dict
question_v2_reply_from_dict = QuestionV2Reply.from_dict(question_v2_reply_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



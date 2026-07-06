# QuestionReplyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**answers** | **List[List[str]]** | User answers in order of questions (each answer is an array of selected labels) | 

## Example

```python
from opencode_sdk.models.question_reply_request import QuestionReplyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of QuestionReplyRequest from a JSON string
question_reply_request_instance = QuestionReplyRequest.from_json(json)
# print the JSON string representation of the object
print(QuestionReplyRequest.to_json())

# convert the object into a dict
question_reply_request_dict = question_reply_request_instance.to_dict()
# create an instance of QuestionReplyRequest from a dict
question_reply_request_from_dict = QuestionReplyRequest.from_dict(question_reply_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



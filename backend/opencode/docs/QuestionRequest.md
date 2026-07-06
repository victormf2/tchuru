# QuestionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**session_id** | **str** |  | 
**questions** | [**List[QuestionInfo]**](QuestionInfo.md) | Questions to ask | 
**tool** | [**QuestionTool**](QuestionTool.md) |  | [optional] 

## Example

```python
from opencode_sdk.models.question_request import QuestionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of QuestionRequest from a JSON string
question_request_instance = QuestionRequest.from_json(json)
# print the JSON string representation of the object
print(QuestionRequest.to_json())

# convert the object into a dict
question_request_dict = question_request_instance.to_dict()
# create an instance of QuestionRequest from a dict
question_request_from_dict = QuestionRequest.from_dict(question_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



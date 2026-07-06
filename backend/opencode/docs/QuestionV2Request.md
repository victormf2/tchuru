# QuestionV2Request


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**session_id** | **str** |  | 
**questions** | [**List[QuestionV2Info]**](QuestionV2Info.md) | Questions to ask | 
**tool** | [**QuestionV2Tool**](QuestionV2Tool.md) |  | [optional] 

## Example

```python
from opencode_sdk.models.question_v2_request import QuestionV2Request

# TODO update the JSON string below
json = "{}"
# create an instance of QuestionV2Request from a JSON string
question_v2_request_instance = QuestionV2Request.from_json(json)
# print the JSON string representation of the object
print(QuestionV2Request.to_json())

# convert the object into a dict
question_v2_request_dict = question_v2_request_instance.to_dict()
# create an instance of QuestionV2Request from a dict
question_v2_request_from_dict = QuestionV2Request.from_dict(question_v2_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



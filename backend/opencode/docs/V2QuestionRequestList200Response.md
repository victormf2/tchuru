# V2QuestionRequestList200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | [**LocationInfo**](LocationInfo.md) |  | 
**data** | [**List[QuestionV2Request]**](QuestionV2Request.md) |  | 

## Example

```python
from opencode_sdk.models.v2_question_request_list200_response import V2QuestionRequestList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of V2QuestionRequestList200Response from a JSON string
v2_question_request_list200_response_instance = V2QuestionRequestList200Response.from_json(json)
# print the JSON string representation of the object
print(V2QuestionRequestList200Response.to_json())

# convert the object into a dict
v2_question_request_list200_response_dict = v2_question_request_list200_response_instance.to_dict()
# create an instance of V2QuestionRequestList200Response from a dict
v2_question_request_list200_response_from_dict = V2QuestionRequestList200Response.from_dict(v2_question_request_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



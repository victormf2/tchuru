# QuestionNotFoundError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tag** | **str** |  | 
**request_id** | **str** |  | 
**message** | **str** |  | 

## Example

```python
from opencode_sdk.models.question_not_found_error import QuestionNotFoundError

# TODO update the JSON string below
json = "{}"
# create an instance of QuestionNotFoundError from a JSON string
question_not_found_error_instance = QuestionNotFoundError.from_json(json)
# print the JSON string representation of the object
print(QuestionNotFoundError.to_json())

# convert the object into a dict
question_not_found_error_dict = question_not_found_error_instance.to_dict()
# create an instance of QuestionNotFoundError from a dict
question_not_found_error_from_dict = QuestionNotFoundError.from_dict(question_not_found_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# QuestionAsked


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**GlobalEventPayloadAnyOf76Properties**](GlobalEventPayloadAnyOf76Properties.md) |  | 

## Example

```python
from opencode_sdk.models.question_asked import QuestionAsked

# TODO update the JSON string below
json = "{}"
# create an instance of QuestionAsked from a JSON string
question_asked_instance = QuestionAsked.from_json(json)
# print the JSON string representation of the object
print(QuestionAsked.to_json())

# convert the object into a dict
question_asked_dict = question_asked_instance.to_dict()
# create an instance of QuestionAsked from a dict
question_asked_from_dict = QuestionAsked.from_dict(question_asked_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



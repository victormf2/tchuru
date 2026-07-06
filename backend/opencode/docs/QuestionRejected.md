# QuestionRejected


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**GlobalEventPayloadAnyOf61Properties**](GlobalEventPayloadAnyOf61Properties.md) |  | 

## Example

```python
from opencode_sdk.models.question_rejected import QuestionRejected

# TODO update the JSON string below
json = "{}"
# create an instance of QuestionRejected from a JSON string
question_rejected_instance = QuestionRejected.from_json(json)
# print the JSON string representation of the object
print(QuestionRejected.to_json())

# convert the object into a dict
question_rejected_dict = question_rejected_instance.to_dict()
# create an instance of QuestionRejected from a dict
question_rejected_from_dict = QuestionRejected.from_dict(question_rejected_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



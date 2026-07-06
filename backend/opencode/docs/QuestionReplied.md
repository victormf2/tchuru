# QuestionReplied


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**GlobalEventPayloadAnyOf77Properties**](GlobalEventPayloadAnyOf77Properties.md) |  | 

## Example

```python
from opencode_sdk.models.question_replied import QuestionReplied

# TODO update the JSON string below
json = "{}"
# create an instance of QuestionReplied from a JSON string
question_replied_instance = QuestionReplied.from_json(json)
# print the JSON string representation of the object
print(QuestionReplied.to_json())

# convert the object into a dict
question_replied_dict = question_replied_instance.to_dict()
# create an instance of QuestionReplied from a dict
question_replied_from_dict = QuestionReplied.from_dict(question_replied_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



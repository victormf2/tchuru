# QuestionV2Asked


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**GlobalEventPayloadAnyOf59Properties**](GlobalEventPayloadAnyOf59Properties.md) |  | 

## Example

```python
from opencode_sdk.models.question_v2_asked import QuestionV2Asked

# TODO update the JSON string below
json = "{}"
# create an instance of QuestionV2Asked from a JSON string
question_v2_asked_instance = QuestionV2Asked.from_json(json)
# print the JSON string representation of the object
print(QuestionV2Asked.to_json())

# convert the object into a dict
question_v2_asked_dict = question_v2_asked_instance.to_dict()
# create an instance of QuestionV2Asked from a dict
question_v2_asked_from_dict = QuestionV2Asked.from_dict(question_v2_asked_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



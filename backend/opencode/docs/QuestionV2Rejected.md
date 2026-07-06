# QuestionV2Rejected


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
from opencode_sdk.models.question_v2_rejected import QuestionV2Rejected

# TODO update the JSON string below
json = "{}"
# create an instance of QuestionV2Rejected from a JSON string
question_v2_rejected_instance = QuestionV2Rejected.from_json(json)
# print the JSON string representation of the object
print(QuestionV2Rejected.to_json())

# convert the object into a dict
question_v2_rejected_dict = question_v2_rejected_instance.to_dict()
# create an instance of QuestionV2Rejected from a dict
question_v2_rejected_from_dict = QuestionV2Rejected.from_dict(question_v2_rejected_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



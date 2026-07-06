# QuestionV2Replied


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**GlobalEventPayloadAnyOf60Properties**](GlobalEventPayloadAnyOf60Properties.md) |  | 

## Example

```python
from opencode_sdk.models.question_v2_replied import QuestionV2Replied

# TODO update the JSON string below
json = "{}"
# create an instance of QuestionV2Replied from a JSON string
question_v2_replied_instance = QuestionV2Replied.from_json(json)
# print the JSON string representation of the object
print(QuestionV2Replied.to_json())

# convert the object into a dict
question_v2_replied_dict = question_v2_replied_instance.to_dict()
# create an instance of QuestionV2Replied from a dict
question_v2_replied_from_dict = QuestionV2Replied.from_dict(question_v2_replied_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



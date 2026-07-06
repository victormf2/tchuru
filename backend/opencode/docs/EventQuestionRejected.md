# EventQuestionRejected


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf61Properties**](GlobalEventPayloadAnyOf61Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_question_rejected import EventQuestionRejected

# TODO update the JSON string below
json = "{}"
# create an instance of EventQuestionRejected from a JSON string
event_question_rejected_instance = EventQuestionRejected.from_json(json)
# print the JSON string representation of the object
print(EventQuestionRejected.to_json())

# convert the object into a dict
event_question_rejected_dict = event_question_rejected_instance.to_dict()
# create an instance of EventQuestionRejected from a dict
event_question_rejected_from_dict = EventQuestionRejected.from_dict(event_question_rejected_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



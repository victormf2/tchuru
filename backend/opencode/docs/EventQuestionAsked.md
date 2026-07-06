# EventQuestionAsked


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf76Properties**](GlobalEventPayloadAnyOf76Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_question_asked import EventQuestionAsked

# TODO update the JSON string below
json = "{}"
# create an instance of EventQuestionAsked from a JSON string
event_question_asked_instance = EventQuestionAsked.from_json(json)
# print the JSON string representation of the object
print(EventQuestionAsked.to_json())

# convert the object into a dict
event_question_asked_dict = event_question_asked_instance.to_dict()
# create an instance of EventQuestionAsked from a dict
event_question_asked_from_dict = EventQuestionAsked.from_dict(event_question_asked_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



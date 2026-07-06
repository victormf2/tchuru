# EventQuestionReplied


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf77Properties**](GlobalEventPayloadAnyOf77Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_question_replied import EventQuestionReplied

# TODO update the JSON string below
json = "{}"
# create an instance of EventQuestionReplied from a JSON string
event_question_replied_instance = EventQuestionReplied.from_json(json)
# print the JSON string representation of the object
print(EventQuestionReplied.to_json())

# convert the object into a dict
event_question_replied_dict = event_question_replied_instance.to_dict()
# create an instance of EventQuestionReplied from a dict
event_question_replied_from_dict = EventQuestionReplied.from_dict(event_question_replied_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



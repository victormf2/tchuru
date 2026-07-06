# EventQuestionV2Asked


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf59Properties**](GlobalEventPayloadAnyOf59Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_question_v2_asked import EventQuestionV2Asked

# TODO update the JSON string below
json = "{}"
# create an instance of EventQuestionV2Asked from a JSON string
event_question_v2_asked_instance = EventQuestionV2Asked.from_json(json)
# print the JSON string representation of the object
print(EventQuestionV2Asked.to_json())

# convert the object into a dict
event_question_v2_asked_dict = event_question_v2_asked_instance.to_dict()
# create an instance of EventQuestionV2Asked from a dict
event_question_v2_asked_from_dict = EventQuestionV2Asked.from_dict(event_question_v2_asked_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



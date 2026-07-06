# EventQuestionV2Rejected


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf61Properties**](GlobalEventPayloadAnyOf61Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_question_v2_rejected import EventQuestionV2Rejected

# TODO update the JSON string below
json = "{}"
# create an instance of EventQuestionV2Rejected from a JSON string
event_question_v2_rejected_instance = EventQuestionV2Rejected.from_json(json)
# print the JSON string representation of the object
print(EventQuestionV2Rejected.to_json())

# convert the object into a dict
event_question_v2_rejected_dict = event_question_v2_rejected_instance.to_dict()
# create an instance of EventQuestionV2Rejected from a dict
event_question_v2_rejected_from_dict = EventQuestionV2Rejected.from_dict(event_question_v2_rejected_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



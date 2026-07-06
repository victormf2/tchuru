# EventSessionNextPromptAdmitted


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf14Properties**](GlobalEventPayloadAnyOf14Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_session_next_prompt_admitted import EventSessionNextPromptAdmitted

# TODO update the JSON string below
json = "{}"
# create an instance of EventSessionNextPromptAdmitted from a JSON string
event_session_next_prompt_admitted_instance = EventSessionNextPromptAdmitted.from_json(json)
# print the JSON string representation of the object
print(EventSessionNextPromptAdmitted.to_json())

# convert the object into a dict
event_session_next_prompt_admitted_dict = event_session_next_prompt_admitted_instance.to_dict()
# create an instance of EventSessionNextPromptAdmitted from a dict
event_session_next_prompt_admitted_from_dict = EventSessionNextPromptAdmitted.from_dict(event_session_next_prompt_admitted_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



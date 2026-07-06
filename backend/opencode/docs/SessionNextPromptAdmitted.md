# SessionNextPromptAdmitted


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**GlobalEventPayloadAnyOf14Properties**](GlobalEventPayloadAnyOf14Properties.md) |  | 

## Example

```python
from opencode_sdk.models.session_next_prompt_admitted import SessionNextPromptAdmitted

# TODO update the JSON string below
json = "{}"
# create an instance of SessionNextPromptAdmitted from a JSON string
session_next_prompt_admitted_instance = SessionNextPromptAdmitted.from_json(json)
# print the JSON string representation of the object
print(SessionNextPromptAdmitted.to_json())

# convert the object into a dict
session_next_prompt_admitted_dict = session_next_prompt_admitted_instance.to_dict()
# create an instance of SessionNextPromptAdmitted from a dict
session_next_prompt_admitted_from_dict = SessionNextPromptAdmitted.from_dict(session_next_prompt_admitted_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



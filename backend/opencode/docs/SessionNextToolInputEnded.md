# SessionNextToolInputEnded


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**GlobalEventPayloadAnyOf31Properties**](GlobalEventPayloadAnyOf31Properties.md) |  | 

## Example

```python
from opencode_sdk.models.session_next_tool_input_ended import SessionNextToolInputEnded

# TODO update the JSON string below
json = "{}"
# create an instance of SessionNextToolInputEnded from a JSON string
session_next_tool_input_ended_instance = SessionNextToolInputEnded.from_json(json)
# print the JSON string representation of the object
print(SessionNextToolInputEnded.to_json())

# convert the object into a dict
session_next_tool_input_ended_dict = session_next_tool_input_ended_instance.to_dict()
# create an instance of SessionNextToolInputEnded from a dict
session_next_tool_input_ended_from_dict = SessionNextToolInputEnded.from_dict(session_next_tool_input_ended_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



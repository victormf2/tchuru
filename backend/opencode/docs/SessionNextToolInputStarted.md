# SessionNextToolInputStarted


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**GlobalEventPayloadAnyOf29Properties**](GlobalEventPayloadAnyOf29Properties.md) |  | 

## Example

```python
from opencode_sdk.models.session_next_tool_input_started import SessionNextToolInputStarted

# TODO update the JSON string below
json = "{}"
# create an instance of SessionNextToolInputStarted from a JSON string
session_next_tool_input_started_instance = SessionNextToolInputStarted.from_json(json)
# print the JSON string representation of the object
print(SessionNextToolInputStarted.to_json())

# convert the object into a dict
session_next_tool_input_started_dict = session_next_tool_input_started_instance.to_dict()
# create an instance of SessionNextToolInputStarted from a dict
session_next_tool_input_started_from_dict = SessionNextToolInputStarted.from_dict(session_next_tool_input_started_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



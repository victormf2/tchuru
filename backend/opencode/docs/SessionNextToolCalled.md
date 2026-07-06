# SessionNextToolCalled


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**GlobalEventPayloadAnyOf32Properties**](GlobalEventPayloadAnyOf32Properties.md) |  | 

## Example

```python
from opencode_sdk.models.session_next_tool_called import SessionNextToolCalled

# TODO update the JSON string below
json = "{}"
# create an instance of SessionNextToolCalled from a JSON string
session_next_tool_called_instance = SessionNextToolCalled.from_json(json)
# print the JSON string representation of the object
print(SessionNextToolCalled.to_json())

# convert the object into a dict
session_next_tool_called_dict = session_next_tool_called_instance.to_dict()
# create an instance of SessionNextToolCalled from a dict
session_next_tool_called_from_dict = SessionNextToolCalled.from_dict(session_next_tool_called_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



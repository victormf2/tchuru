# SessionNextToolSuccess


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**GlobalEventPayloadAnyOf34Properties**](GlobalEventPayloadAnyOf34Properties.md) |  | 

## Example

```python
from opencode_sdk.models.session_next_tool_success import SessionNextToolSuccess

# TODO update the JSON string below
json = "{}"
# create an instance of SessionNextToolSuccess from a JSON string
session_next_tool_success_instance = SessionNextToolSuccess.from_json(json)
# print the JSON string representation of the object
print(SessionNextToolSuccess.to_json())

# convert the object into a dict
session_next_tool_success_dict = session_next_tool_success_instance.to_dict()
# create an instance of SessionNextToolSuccess from a dict
session_next_tool_success_from_dict = SessionNextToolSuccess.from_dict(session_next_tool_success_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# SessionNextContextUpdated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**GlobalEventPayloadAnyOf16Properties**](GlobalEventPayloadAnyOf16Properties.md) |  | 

## Example

```python
from opencode_sdk.models.session_next_context_updated import SessionNextContextUpdated

# TODO update the JSON string below
json = "{}"
# create an instance of SessionNextContextUpdated from a JSON string
session_next_context_updated_instance = SessionNextContextUpdated.from_json(json)
# print the JSON string representation of the object
print(SessionNextContextUpdated.to_json())

# convert the object into a dict
session_next_context_updated_dict = session_next_context_updated_instance.to_dict()
# create an instance of SessionNextContextUpdated from a dict
session_next_context_updated_from_dict = SessionNextContextUpdated.from_dict(session_next_context_updated_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



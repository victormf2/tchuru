# SessionNextMoved


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**GlobalEventPayloadAnyOf13Properties**](GlobalEventPayloadAnyOf13Properties.md) |  | 

## Example

```python
from opencode_sdk.models.session_next_moved import SessionNextMoved

# TODO update the JSON string below
json = "{}"
# create an instance of SessionNextMoved from a JSON string
session_next_moved_instance = SessionNextMoved.from_json(json)
# print the JSON string representation of the object
print(SessionNextMoved.to_json())

# convert the object into a dict
session_next_moved_dict = session_next_moved_instance.to_dict()
# create an instance of SessionNextMoved from a dict
session_next_moved_from_dict = SessionNextMoved.from_dict(session_next_moved_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



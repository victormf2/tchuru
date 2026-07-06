# SessionStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**GlobalEventPayloadAnyOf74Properties**](GlobalEventPayloadAnyOf74Properties.md) |  | 

## Example

```python
from opencode_sdk.models.session_status import SessionStatus

# TODO update the JSON string below
json = "{}"
# create an instance of SessionStatus from a JSON string
session_status_instance = SessionStatus.from_json(json)
# print the JSON string representation of the object
print(SessionStatus.to_json())

# convert the object into a dict
session_status_dict = session_status_instance.to_dict()
# create an instance of SessionStatus from a dict
session_status_from_dict = SessionStatus.from_dict(session_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



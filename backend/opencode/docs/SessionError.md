# SessionError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**GlobalEventPayloadAnyOf45Properties**](GlobalEventPayloadAnyOf45Properties.md) |  | 

## Example

```python
from opencode_sdk.models.session_error import SessionError

# TODO update the JSON string below
json = "{}"
# create an instance of SessionError from a JSON string
session_error_instance = SessionError.from_json(json)
# print the JSON string representation of the object
print(SessionError.to_json())

# convert the object into a dict
session_error_dict = session_error_instance.to_dict()
# create an instance of SessionError from a dict
session_error_from_dict = SessionError.from_dict(session_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



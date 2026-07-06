# SessionCreated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**GlobalEventPayloadAnyOf4Properties**](GlobalEventPayloadAnyOf4Properties.md) |  | 

## Example

```python
from opencode_sdk.models.session_created import SessionCreated

# TODO update the JSON string below
json = "{}"
# create an instance of SessionCreated from a JSON string
session_created_instance = SessionCreated.from_json(json)
# print the JSON string representation of the object
print(SessionCreated.to_json())

# convert the object into a dict
session_created_dict = session_created_instance.to_dict()
# create an instance of SessionCreated from a dict
session_created_from_dict = SessionCreated.from_dict(session_created_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



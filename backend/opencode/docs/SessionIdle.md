# SessionIdle


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**SyncStealRequest**](SyncStealRequest.md) |  | 

## Example

```python
from opencode_sdk.models.session_idle import SessionIdle

# TODO update the JSON string below
json = "{}"
# create an instance of SessionIdle from a JSON string
session_idle_instance = SessionIdle.from_json(json)
# print the JSON string representation of the object
print(SessionIdle.to_json())

# convert the object into a dict
session_idle_dict = session_idle_instance.to_dict()
# create an instance of SessionIdle from a dict
session_idle_from_dict = SessionIdle.from_dict(session_idle_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



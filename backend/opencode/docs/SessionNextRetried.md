# SessionNextRetried


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**GlobalEventPayloadAnyOf36Properties**](GlobalEventPayloadAnyOf36Properties.md) |  | 

## Example

```python
from opencode_sdk.models.session_next_retried import SessionNextRetried

# TODO update the JSON string below
json = "{}"
# create an instance of SessionNextRetried from a JSON string
session_next_retried_instance = SessionNextRetried.from_json(json)
# print the JSON string representation of the object
print(SessionNextRetried.to_json())

# convert the object into a dict
session_next_retried_dict = session_next_retried_instance.to_dict()
# create an instance of SessionNextRetried from a dict
session_next_retried_from_dict = SessionNextRetried.from_dict(session_next_retried_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



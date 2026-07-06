# SessionDurableEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**GlobalEventPayloadAnyOf42Properties**](GlobalEventPayloadAnyOf42Properties.md) |  | 

## Example

```python
from opencode_sdk.models.session_durable_event import SessionDurableEvent

# TODO update the JSON string below
json = "{}"
# create an instance of SessionDurableEvent from a JSON string
session_durable_event_instance = SessionDurableEvent.from_json(json)
# print the JSON string representation of the object
print(SessionDurableEvent.to_json())

# convert the object into a dict
session_durable_event_dict = session_durable_event_instance.to_dict()
# create an instance of SessionDurableEvent from a dict
session_durable_event_from_dict = SessionDurableEvent.from_dict(session_durable_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



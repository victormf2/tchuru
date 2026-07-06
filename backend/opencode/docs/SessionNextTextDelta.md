# SessionNextTextDelta


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**GlobalEventPayloadAnyOf24Properties**](GlobalEventPayloadAnyOf24Properties.md) |  | 

## Example

```python
from opencode_sdk.models.session_next_text_delta import SessionNextTextDelta

# TODO update the JSON string below
json = "{}"
# create an instance of SessionNextTextDelta from a JSON string
session_next_text_delta_instance = SessionNextTextDelta.from_json(json)
# print the JSON string representation of the object
print(SessionNextTextDelta.to_json())

# convert the object into a dict
session_next_text_delta_dict = session_next_text_delta_instance.to_dict()
# create an instance of SessionNextTextDelta from a dict
session_next_text_delta_from_dict = SessionNextTextDelta.from_dict(session_next_text_delta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



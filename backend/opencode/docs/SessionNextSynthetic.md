# SessionNextSynthetic


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
from opencode_sdk.models.session_next_synthetic import SessionNextSynthetic

# TODO update the JSON string below
json = "{}"
# create an instance of SessionNextSynthetic from a JSON string
session_next_synthetic_instance = SessionNextSynthetic.from_json(json)
# print the JSON string representation of the object
print(SessionNextSynthetic.to_json())

# convert the object into a dict
session_next_synthetic_dict = session_next_synthetic_instance.to_dict()
# create an instance of SessionNextSynthetic from a dict
session_next_synthetic_from_dict = SessionNextSynthetic.from_dict(session_next_synthetic_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



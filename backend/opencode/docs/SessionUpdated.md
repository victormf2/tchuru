# SessionUpdated


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
from opencode_sdk.models.session_updated import SessionUpdated

# TODO update the JSON string below
json = "{}"
# create an instance of SessionUpdated from a JSON string
session_updated_instance = SessionUpdated.from_json(json)
# print the JSON string representation of the object
print(SessionUpdated.to_json())

# convert the object into a dict
session_updated_dict = session_updated_instance.to_dict()
# create an instance of SessionUpdated from a dict
session_updated_from_dict = SessionUpdated.from_dict(session_updated_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



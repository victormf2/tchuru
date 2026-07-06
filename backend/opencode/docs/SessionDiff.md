# SessionDiff


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**GlobalEventPayloadAnyOf44Properties**](GlobalEventPayloadAnyOf44Properties.md) |  | 

## Example

```python
from opencode_sdk.models.session_diff import SessionDiff

# TODO update the JSON string below
json = "{}"
# create an instance of SessionDiff from a JSON string
session_diff_instance = SessionDiff.from_json(json)
# print the JSON string representation of the object
print(SessionDiff.to_json())

# convert the object into a dict
session_diff_dict = session_diff_instance.to_dict()
# create an instance of SessionDiff from a dict
session_diff_from_dict = SessionDiff.from_dict(session_diff_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# SessionNextToolProgress


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**GlobalEventPayloadAnyOf33Properties**](GlobalEventPayloadAnyOf33Properties.md) |  | 

## Example

```python
from opencode_sdk.models.session_next_tool_progress import SessionNextToolProgress

# TODO update the JSON string below
json = "{}"
# create an instance of SessionNextToolProgress from a JSON string
session_next_tool_progress_instance = SessionNextToolProgress.from_json(json)
# print the JSON string representation of the object
print(SessionNextToolProgress.to_json())

# convert the object into a dict
session_next_tool_progress_dict = session_next_tool_progress_instance.to_dict()
# create an instance of SessionNextToolProgress from a dict
session_next_tool_progress_from_dict = SessionNextToolProgress.from_dict(session_next_tool_progress_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# SessionMessageModelSwitched


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**time** | [**SessionMessageAgentSwitchedTime**](SessionMessageAgentSwitchedTime.md) |  | 
**type** | **str** |  | 
**model** | [**ModelRef**](ModelRef.md) |  | 

## Example

```python
from opencode_sdk.models.session_message_model_switched import SessionMessageModelSwitched

# TODO update the JSON string below
json = "{}"
# create an instance of SessionMessageModelSwitched from a JSON string
session_message_model_switched_instance = SessionMessageModelSwitched.from_json(json)
# print the JSON string representation of the object
print(SessionMessageModelSwitched.to_json())

# convert the object into a dict
session_message_model_switched_dict = session_message_model_switched_instance.to_dict()
# create an instance of SessionMessageModelSwitched from a dict
session_message_model_switched_from_dict = SessionMessageModelSwitched.from_dict(session_message_model_switched_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



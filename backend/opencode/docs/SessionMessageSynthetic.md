# SessionMessageSynthetic


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**time** | [**SessionMessageAgentSwitchedTime**](SessionMessageAgentSwitchedTime.md) |  | 
**session_id** | **str** |  | 
**text** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from opencode_sdk.models.session_message_synthetic import SessionMessageSynthetic

# TODO update the JSON string below
json = "{}"
# create an instance of SessionMessageSynthetic from a JSON string
session_message_synthetic_instance = SessionMessageSynthetic.from_json(json)
# print the JSON string representation of the object
print(SessionMessageSynthetic.to_json())

# convert the object into a dict
session_message_synthetic_dict = session_message_synthetic_instance.to_dict()
# create an instance of SessionMessageSynthetic from a dict
session_message_synthetic_from_dict = SessionMessageSynthetic.from_dict(session_message_synthetic_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# SessionMessageAssistantSnapshot


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start** | **str** |  | [optional] 
**end** | **str** |  | [optional] 
**files** | **List[str]** |  | [optional] 

## Example

```python
from opencode_sdk.models.session_message_assistant_snapshot import SessionMessageAssistantSnapshot

# TODO update the JSON string below
json = "{}"
# create an instance of SessionMessageAssistantSnapshot from a JSON string
session_message_assistant_snapshot_instance = SessionMessageAssistantSnapshot.from_json(json)
# print the JSON string representation of the object
print(SessionMessageAssistantSnapshot.to_json())

# convert the object into a dict
session_message_assistant_snapshot_dict = session_message_assistant_snapshot_instance.to_dict()
# create an instance of SessionMessageAssistantSnapshot from a dict
session_message_assistant_snapshot_from_dict = SessionMessageAssistantSnapshot.from_dict(session_message_assistant_snapshot_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



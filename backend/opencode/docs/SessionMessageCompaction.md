# SessionMessageCompaction


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**reason** | **str** |  | 
**summary** | **str** |  | 
**recent** | **str** |  | 
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**time** | [**SessionMessageAgentSwitchedTime**](SessionMessageAgentSwitchedTime.md) |  | 

## Example

```python
from opencode_sdk.models.session_message_compaction import SessionMessageCompaction

# TODO update the JSON string below
json = "{}"
# create an instance of SessionMessageCompaction from a JSON string
session_message_compaction_instance = SessionMessageCompaction.from_json(json)
# print the JSON string representation of the object
print(SessionMessageCompaction.to_json())

# convert the object into a dict
session_message_compaction_dict = session_message_compaction_instance.to_dict()
# create an instance of SessionMessageCompaction from a dict
session_message_compaction_from_dict = SessionMessageCompaction.from_dict(session_message_compaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



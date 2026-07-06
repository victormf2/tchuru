# UserMessageSummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **str** |  | [optional] 
**body** | **str** |  | [optional] 
**diffs** | [**List[SnapshotFileDiff]**](SnapshotFileDiff.md) |  | 

## Example

```python
from opencode_sdk.models.user_message_summary import UserMessageSummary

# TODO update the JSON string below
json = "{}"
# create an instance of UserMessageSummary from a JSON string
user_message_summary_instance = UserMessageSummary.from_json(json)
# print the JSON string representation of the object
print(UserMessageSummary.to_json())

# convert the object into a dict
user_message_summary_dict = user_message_summary_instance.to_dict()
# create an instance of UserMessageSummary from a dict
user_message_summary_from_dict = UserMessageSummary.from_dict(user_message_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



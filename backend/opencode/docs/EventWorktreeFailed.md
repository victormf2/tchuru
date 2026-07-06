# EventWorktreeFailed


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**MoveSessionErrorData**](MoveSessionErrorData.md) |  | 

## Example

```python
from opencode_sdk.models.event_worktree_failed import EventWorktreeFailed

# TODO update the JSON string below
json = "{}"
# create an instance of EventWorktreeFailed from a JSON string
event_worktree_failed_instance = EventWorktreeFailed.from_json(json)
# print the JSON string representation of the object
print(EventWorktreeFailed.to_json())

# convert the object into a dict
event_worktree_failed_dict = event_worktree_failed_instance.to_dict()
# create an instance of EventWorktreeFailed from a dict
event_worktree_failed_from_dict = EventWorktreeFailed.from_dict(event_worktree_failed_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



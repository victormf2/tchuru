# WorktreeFailed


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**MoveSessionErrorData**](MoveSessionErrorData.md) |  | 

## Example

```python
from opencode_sdk.models.worktree_failed import WorktreeFailed

# TODO update the JSON string below
json = "{}"
# create an instance of WorktreeFailed from a JSON string
worktree_failed_instance = WorktreeFailed.from_json(json)
# print the JSON string representation of the object
print(WorktreeFailed.to_json())

# convert the object into a dict
worktree_failed_dict = worktree_failed_instance.to_dict()
# create an instance of WorktreeFailed from a dict
worktree_failed_from_dict = WorktreeFailed.from_dict(worktree_failed_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# WorktreeError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**data** | [**MoveSessionErrorData**](MoveSessionErrorData.md) |  | 

## Example

```python
from opencode_sdk.models.worktree_error import WorktreeError

# TODO update the JSON string below
json = "{}"
# create an instance of WorktreeError from a JSON string
worktree_error_instance = WorktreeError.from_json(json)
# print the JSON string representation of the object
print(WorktreeError.to_json())

# convert the object into a dict
worktree_error_dict = worktree_error_instance.to_dict()
# create an instance of WorktreeError from a dict
worktree_error_from_dict = WorktreeError.from_dict(worktree_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



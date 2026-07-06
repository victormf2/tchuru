# Worktree


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**branch** | **str** |  | [optional] 
**directory** | **str** |  | 

## Example

```python
from opencode_sdk.models.worktree import Worktree

# TODO update the JSON string below
json = "{}"
# create an instance of Worktree from a JSON string
worktree_instance = Worktree.from_json(json)
# print the JSON string representation of the object
print(Worktree.to_json())

# convert the object into a dict
worktree_dict = worktree_instance.to_dict()
# create an instance of Worktree from a dict
worktree_from_dict = Worktree.from_dict(worktree_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



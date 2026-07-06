# WorktreeCreateInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**start_command** | **str** | Additional startup script to run after the project&#39;s start command | [optional] 

## Example

```python
from opencode_sdk.models.worktree_create_input import WorktreeCreateInput

# TODO update the JSON string below
json = "{}"
# create an instance of WorktreeCreateInput from a JSON string
worktree_create_input_instance = WorktreeCreateInput.from_json(json)
# print the JSON string representation of the object
print(WorktreeCreateInput.to_json())

# convert the object into a dict
worktree_create_input_dict = worktree_create_input_instance.to_dict()
# create an instance of WorktreeCreateInput from a dict
worktree_create_input_from_dict = WorktreeCreateInput.from_dict(worktree_create_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



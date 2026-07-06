# WorktreeList400Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**data** | [**MoveSessionErrorData**](MoveSessionErrorData.md) |  | 
**tag** | **str** |  | 
**message** | **str** |  | 
**kind** | **str** |  | [optional] 
**var_field** | **str** |  | [optional] 

## Example

```python
from opencode_sdk.models.worktree_list400_response import WorktreeList400Response

# TODO update the JSON string below
json = "{}"
# create an instance of WorktreeList400Response from a JSON string
worktree_list400_response_instance = WorktreeList400Response.from_json(json)
# print the JSON string representation of the object
print(WorktreeList400Response.to_json())

# convert the object into a dict
worktree_list400_response_dict = worktree_list400_response_instance.to_dict()
# create an instance of WorktreeList400Response from a dict
worktree_list400_response_from_dict = WorktreeList400Response.from_dict(worktree_list400_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# WorktreeReady


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**GlobalEventPayloadAnyOf84Properties**](GlobalEventPayloadAnyOf84Properties.md) |  | 

## Example

```python
from opencode_sdk.models.worktree_ready import WorktreeReady

# TODO update the JSON string below
json = "{}"
# create an instance of WorktreeReady from a JSON string
worktree_ready_instance = WorktreeReady.from_json(json)
# print the JSON string representation of the object
print(WorktreeReady.to_json())

# convert the object into a dict
worktree_ready_dict = worktree_ready_instance.to_dict()
# create an instance of WorktreeReady from a dict
worktree_ready_from_dict = WorktreeReady.from_dict(worktree_ready_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



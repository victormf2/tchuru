# WorkspaceFailed


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
from opencode_sdk.models.workspace_failed import WorkspaceFailed

# TODO update the JSON string below
json = "{}"
# create an instance of WorkspaceFailed from a JSON string
workspace_failed_instance = WorkspaceFailed.from_json(json)
# print the JSON string representation of the object
print(WorkspaceFailed.to_json())

# convert the object into a dict
workspace_failed_dict = workspace_failed_instance.to_dict()
# create an instance of WorkspaceFailed from a dict
workspace_failed_from_dict = WorkspaceFailed.from_dict(workspace_failed_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# WorkspaceCreateError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**data** | [**MoveSessionErrorData**](MoveSessionErrorData.md) |  | 

## Example

```python
from opencode_sdk.models.workspace_create_error import WorkspaceCreateError

# TODO update the JSON string below
json = "{}"
# create an instance of WorkspaceCreateError from a JSON string
workspace_create_error_instance = WorkspaceCreateError.from_json(json)
# print the JSON string representation of the object
print(WorkspaceCreateError.to_json())

# convert the object into a dict
workspace_create_error_dict = workspace_create_error_instance.to_dict()
# create an instance of WorkspaceCreateError from a dict
workspace_create_error_from_dict = WorkspaceCreateError.from_dict(workspace_create_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



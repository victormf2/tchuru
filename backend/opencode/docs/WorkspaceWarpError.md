# WorkspaceWarpError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**data** | [**MoveSessionErrorData**](MoveSessionErrorData.md) |  | 

## Example

```python
from opencode_sdk.models.workspace_warp_error import WorkspaceWarpError

# TODO update the JSON string below
json = "{}"
# create an instance of WorkspaceWarpError from a JSON string
workspace_warp_error_instance = WorkspaceWarpError.from_json(json)
# print the JSON string representation of the object
print(WorkspaceWarpError.to_json())

# convert the object into a dict
workspace_warp_error_dict = workspace_warp_error_instance.to_dict()
# create an instance of WorkspaceWarpError from a dict
workspace_warp_error_from_dict = WorkspaceWarpError.from_dict(workspace_warp_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



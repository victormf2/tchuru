# Workspace


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**name** | **str** |  | 
**branch** | **str** |  | [optional] 
**directory** | **str** |  | [optional] 
**extra** | [**AnyOf**](AnyOf.md) |  | [optional] 
**project_id** | **str** |  | 
**time_used** | [**WorkspaceTimeUsed**](WorkspaceTimeUsed.md) |  | 

## Example

```python
from opencode_sdk.models.workspace import Workspace

# TODO update the JSON string below
json = "{}"
# create an instance of Workspace from a JSON string
workspace_instance = Workspace.from_json(json)
# print the JSON string representation of the object
print(Workspace.to_json())

# convert the object into a dict
workspace_dict = workspace_instance.to_dict()
# create an instance of Workspace from a dict
workspace_from_dict = Workspace.from_dict(workspace_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



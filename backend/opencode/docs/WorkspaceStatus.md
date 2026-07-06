# WorkspaceStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**WorkspaceStatusData**](WorkspaceStatusData.md) |  | 

## Example

```python
from opencode_sdk.models.workspace_status import WorkspaceStatus

# TODO update the JSON string below
json = "{}"
# create an instance of WorkspaceStatus from a JSON string
workspace_status_instance = WorkspaceStatus.from_json(json)
# print the JSON string representation of the object
print(WorkspaceStatus.to_json())

# convert the object into a dict
workspace_status_dict = workspace_status_instance.to_dict()
# create an instance of WorkspaceStatus from a dict
workspace_status_from_dict = WorkspaceStatus.from_dict(workspace_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# WorkspaceReady


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**ExperimentalProjectCopyGenerateName200Response**](ExperimentalProjectCopyGenerateName200Response.md) |  | 

## Example

```python
from opencode_sdk.models.workspace_ready import WorkspaceReady

# TODO update the JSON string below
json = "{}"
# create an instance of WorkspaceReady from a JSON string
workspace_ready_instance = WorkspaceReady.from_json(json)
# print the JSON string representation of the object
print(WorkspaceReady.to_json())

# convert the object into a dict
workspace_ready_dict = workspace_ready_instance.to_dict()
# create an instance of WorkspaceReady from a dict
workspace_ready_from_dict = WorkspaceReady.from_dict(workspace_ready_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# WorkspaceStatusData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workspace_id** | **str** |  | 
**status** | **str** |  | 

## Example

```python
from opencode_sdk.models.workspace_status_data import WorkspaceStatusData

# TODO update the JSON string below
json = "{}"
# create an instance of WorkspaceStatusData from a JSON string
workspace_status_data_instance = WorkspaceStatusData.from_json(json)
# print the JSON string representation of the object
print(WorkspaceStatusData.to_json())

# convert the object into a dict
workspace_status_data_dict = workspace_status_data_instance.to_dict()
# create an instance of WorkspaceStatusData from a dict
workspace_status_data_from_dict = WorkspaceStatusData.from_dict(workspace_status_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



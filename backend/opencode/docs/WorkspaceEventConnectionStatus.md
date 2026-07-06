# WorkspaceEventConnectionStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workspace_id** | **str** |  | 
**status** | **str** |  | 

## Example

```python
from opencode_sdk.models.workspace_event_connection_status import WorkspaceEventConnectionStatus

# TODO update the JSON string below
json = "{}"
# create an instance of WorkspaceEventConnectionStatus from a JSON string
workspace_event_connection_status_instance = WorkspaceEventConnectionStatus.from_json(json)
# print the JSON string representation of the object
print(WorkspaceEventConnectionStatus.to_json())

# convert the object into a dict
workspace_event_connection_status_dict = workspace_event_connection_status_instance.to_dict()
# create an instance of WorkspaceEventConnectionStatus from a dict
workspace_event_connection_status_from_dict = WorkspaceEventConnectionStatus.from_dict(workspace_event_connection_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



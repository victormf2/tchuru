# EventWorkspaceStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**WorkspaceStatusData**](WorkspaceStatusData.md) |  | 

## Example

```python
from opencode_sdk.models.event_workspace_status import EventWorkspaceStatus

# TODO update the JSON string below
json = "{}"
# create an instance of EventWorkspaceStatus from a JSON string
event_workspace_status_instance = EventWorkspaceStatus.from_json(json)
# print the JSON string representation of the object
print(EventWorkspaceStatus.to_json())

# convert the object into a dict
event_workspace_status_dict = event_workspace_status_instance.to_dict()
# create an instance of EventWorkspaceStatus from a dict
event_workspace_status_from_dict = EventWorkspaceStatus.from_dict(event_workspace_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



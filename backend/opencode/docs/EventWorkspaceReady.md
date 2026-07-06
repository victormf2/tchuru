# EventWorkspaceReady


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**ExperimentalProjectCopyGenerateName200Response**](ExperimentalProjectCopyGenerateName200Response.md) |  | 

## Example

```python
from opencode_sdk.models.event_workspace_ready import EventWorkspaceReady

# TODO update the JSON string below
json = "{}"
# create an instance of EventWorkspaceReady from a JSON string
event_workspace_ready_instance = EventWorkspaceReady.from_json(json)
# print the JSON string representation of the object
print(EventWorkspaceReady.to_json())

# convert the object into a dict
event_workspace_ready_dict = event_workspace_ready_instance.to_dict()
# create an instance of EventWorkspaceReady from a dict
event_workspace_ready_from_dict = EventWorkspaceReady.from_dict(event_workspace_ready_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



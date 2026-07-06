# ExperimentalWorkspaceWarpRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**session_id** | **str** |  | 
**copy_changes** | **bool** |  | [optional] 

## Example

```python
from opencode_sdk.models.experimental_workspace_warp_request import ExperimentalWorkspaceWarpRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ExperimentalWorkspaceWarpRequest from a JSON string
experimental_workspace_warp_request_instance = ExperimentalWorkspaceWarpRequest.from_json(json)
# print the JSON string representation of the object
print(ExperimentalWorkspaceWarpRequest.to_json())

# convert the object into a dict
experimental_workspace_warp_request_dict = experimental_workspace_warp_request_instance.to_dict()
# create an instance of ExperimentalWorkspaceWarpRequest from a dict
experimental_workspace_warp_request_from_dict = ExperimentalWorkspaceWarpRequest.from_dict(experimental_workspace_warp_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



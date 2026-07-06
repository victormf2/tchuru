# ExperimentalWorkspaceWarp400Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**data** | [**VcsApplyErrorData**](VcsApplyErrorData.md) |  | 
**tag** | **str** |  | 
**message** | **str** |  | 
**kind** | **str** |  | [optional] 
**var_field** | **str** |  | [optional] 

## Example

```python
from opencode_sdk.models.experimental_workspace_warp400_response import ExperimentalWorkspaceWarp400Response

# TODO update the JSON string below
json = "{}"
# create an instance of ExperimentalWorkspaceWarp400Response from a JSON string
experimental_workspace_warp400_response_instance = ExperimentalWorkspaceWarp400Response.from_json(json)
# print the JSON string representation of the object
print(ExperimentalWorkspaceWarp400Response.to_json())

# convert the object into a dict
experimental_workspace_warp400_response_dict = experimental_workspace_warp400_response_instance.to_dict()
# create an instance of ExperimentalWorkspaceWarp400Response from a dict
experimental_workspace_warp400_response_from_dict = ExperimentalWorkspaceWarp400Response.from_dict(experimental_workspace_warp400_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



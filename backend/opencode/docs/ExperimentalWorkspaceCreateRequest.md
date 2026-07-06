# ExperimentalWorkspaceCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**type** | **str** |  | 
**branch** | **str** |  | [optional] 
**extra** | [**AnyOf**](AnyOf.md) |  | [optional] 

## Example

```python
from opencode_sdk.models.experimental_workspace_create_request import ExperimentalWorkspaceCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ExperimentalWorkspaceCreateRequest from a JSON string
experimental_workspace_create_request_instance = ExperimentalWorkspaceCreateRequest.from_json(json)
# print the JSON string representation of the object
print(ExperimentalWorkspaceCreateRequest.to_json())

# convert the object into a dict
experimental_workspace_create_request_dict = experimental_workspace_create_request_instance.to_dict()
# create an instance of ExperimentalWorkspaceCreateRequest from a dict
experimental_workspace_create_request_from_dict = ExperimentalWorkspaceCreateRequest.from_dict(experimental_workspace_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



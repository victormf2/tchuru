# V2ProjectCopyCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**strategy** | **str** |  | 
**directory** | **str** |  | 
**name** | **str** |  | [optional] 

## Example

```python
from opencode_sdk.models.v2_project_copy_create_request import V2ProjectCopyCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of V2ProjectCopyCreateRequest from a JSON string
v2_project_copy_create_request_instance = V2ProjectCopyCreateRequest.from_json(json)
# print the JSON string representation of the object
print(V2ProjectCopyCreateRequest.to_json())

# convert the object into a dict
v2_project_copy_create_request_dict = v2_project_copy_create_request_instance.to_dict()
# create an instance of V2ProjectCopyCreateRequest from a dict
v2_project_copy_create_request_from_dict = V2ProjectCopyCreateRequest.from_dict(v2_project_copy_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



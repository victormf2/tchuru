# V2ProjectCopyRemoveRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**directory** | **str** |  | 
**force** | **bool** |  | 

## Example

```python
from opencode_sdk.models.v2_project_copy_remove_request import V2ProjectCopyRemoveRequest

# TODO update the JSON string below
json = "{}"
# create an instance of V2ProjectCopyRemoveRequest from a JSON string
v2_project_copy_remove_request_instance = V2ProjectCopyRemoveRequest.from_json(json)
# print the JSON string representation of the object
print(V2ProjectCopyRemoveRequest.to_json())

# convert the object into a dict
v2_project_copy_remove_request_dict = v2_project_copy_remove_request_instance.to_dict()
# create an instance of V2ProjectCopyRemoveRequest from a dict
v2_project_copy_remove_request_from_dict = V2ProjectCopyRemoveRequest.from_dict(v2_project_copy_remove_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



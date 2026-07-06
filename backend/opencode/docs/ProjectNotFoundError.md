# ProjectNotFoundError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tag** | **str** |  | 
**project_id** | **str** |  | 
**message** | **str** |  | 

## Example

```python
from opencode_sdk.models.project_not_found_error import ProjectNotFoundError

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectNotFoundError from a JSON string
project_not_found_error_instance = ProjectNotFoundError.from_json(json)
# print the JSON string representation of the object
print(ProjectNotFoundError.to_json())

# convert the object into a dict
project_not_found_error_dict = project_not_found_error_instance.to_dict()
# create an instance of ProjectNotFoundError from a dict
project_not_found_error_from_dict = ProjectNotFoundError.from_dict(project_not_found_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



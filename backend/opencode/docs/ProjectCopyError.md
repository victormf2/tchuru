# ProjectCopyError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**data** | [**ProjectCopyErrorData**](ProjectCopyErrorData.md) |  | 

## Example

```python
from opencode_sdk.models.project_copy_error import ProjectCopyError

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectCopyError from a JSON string
project_copy_error_instance = ProjectCopyError.from_json(json)
# print the JSON string representation of the object
print(ProjectCopyError.to_json())

# convert the object into a dict
project_copy_error_dict = project_copy_error_instance.to_dict()
# create an instance of ProjectCopyError from a dict
project_copy_error_from_dict = ProjectCopyError.from_dict(project_copy_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



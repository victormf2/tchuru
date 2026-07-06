# ProjectTime


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **int** |  | 
**updated** | **int** |  | 
**initialized** | **int** |  | [optional] 

## Example

```python
from opencode_sdk.models.project_time import ProjectTime

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectTime from a JSON string
project_time_instance = ProjectTime.from_json(json)
# print the JSON string representation of the object
print(ProjectTime.to_json())

# convert the object into a dict
project_time_dict = project_time_instance.to_dict()
# create an instance of ProjectTime from a dict
project_time_from_dict = ProjectTime.from_dict(project_time_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



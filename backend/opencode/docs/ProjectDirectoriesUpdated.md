# ProjectDirectoriesUpdated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**GlobalEventPayloadAnyOf53Properties**](GlobalEventPayloadAnyOf53Properties.md) |  | 

## Example

```python
from opencode_sdk.models.project_directories_updated import ProjectDirectoriesUpdated

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectDirectoriesUpdated from a JSON string
project_directories_updated_instance = ProjectDirectoriesUpdated.from_json(json)
# print the JSON string representation of the object
print(ProjectDirectoriesUpdated.to_json())

# convert the object into a dict
project_directories_updated_dict = project_directories_updated_instance.to_dict()
# create an instance of ProjectDirectoriesUpdated from a dict
project_directories_updated_from_dict = ProjectDirectoriesUpdated.from_dict(project_directories_updated_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ProjectUpdated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**GlobalEventPayloadAnyOf73Properties**](GlobalEventPayloadAnyOf73Properties.md) |  | 

## Example

```python
from opencode_sdk.models.project_updated import ProjectUpdated

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectUpdated from a JSON string
project_updated_instance = ProjectUpdated.from_json(json)
# print the JSON string representation of the object
print(ProjectUpdated.to_json())

# convert the object into a dict
project_updated_dict = project_updated_instance.to_dict()
# create an instance of ProjectUpdated from a dict
project_updated_from_dict = ProjectUpdated.from_dict(project_updated_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



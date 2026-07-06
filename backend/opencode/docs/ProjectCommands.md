# ProjectCommands


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start** | **str** | Startup script to run when creating a new workspace (worktree) | [optional] 

## Example

```python
from opencode_sdk.models.project_commands import ProjectCommands

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectCommands from a JSON string
project_commands_instance = ProjectCommands.from_json(json)
# print the JSON string representation of the object
print(ProjectCommands.to_json())

# convert the object into a dict
project_commands_dict = project_commands_instance.to_dict()
# create an instance of ProjectCommands from a dict
project_commands_from_dict = ProjectCommands.from_dict(project_commands_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



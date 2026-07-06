# Todo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** | Brief description of the task | 
**status** | **str** | Current status of the task: pending, in_progress, completed, cancelled | 
**priority** | **str** | Priority level of the task: high, medium, low | 

## Example

```python
from opencode_sdk.models.todo import Todo

# TODO update the JSON string below
json = "{}"
# create an instance of Todo from a JSON string
todo_instance = Todo.from_json(json)
# print the JSON string representation of the object
print(Todo.to_json())

# convert the object into a dict
todo_dict = todo_instance.to_dict()
# create an instance of Todo from a dict
todo_from_dict = Todo.from_dict(todo_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



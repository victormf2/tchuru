# Path


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**home** | **str** |  | 
**state** | **str** |  | 
**config** | **str** |  | 
**worktree** | **str** |  | 
**directory** | **str** |  | 

## Example

```python
from opencode_sdk.models.path import Path

# TODO update the JSON string below
json = "{}"
# create an instance of Path from a JSON string
path_instance = Path.from_json(json)
# print the JSON string representation of the object
print(Path.to_json())

# convert the object into a dict
path_dict = path_instance.to_dict()
# create an instance of Path from a dict
path_from_dict = Path.from_dict(path_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



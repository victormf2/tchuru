# Pty


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**title** | **str** |  | 
**command** | **str** |  | 
**args** | **List[str]** |  | 
**cwd** | **str** |  | 
**status** | **str** |  | 
**pid** | **int** |  | 
**exit_code** | **int** |  | [optional] 

## Example

```python
from opencode_sdk.models.pty import Pty

# TODO update the JSON string below
json = "{}"
# create an instance of Pty from a JSON string
pty_instance = Pty.from_json(json)
# print the JSON string representation of the object
print(Pty.to_json())

# convert the object into a dict
pty_dict = pty_instance.to_dict()
# create an instance of Pty from a dict
pty_from_dict = Pty.from_dict(pty_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



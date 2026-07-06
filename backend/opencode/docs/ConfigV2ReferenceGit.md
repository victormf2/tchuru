# ConfigV2ReferenceGit


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**repository** | **str** |  | 
**branch** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**hidden** | **bool** |  | [optional] 

## Example

```python
from opencode_sdk.models.config_v2_reference_git import ConfigV2ReferenceGit

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigV2ReferenceGit from a JSON string
config_v2_reference_git_instance = ConfigV2ReferenceGit.from_json(json)
# print the JSON string representation of the object
print(ConfigV2ReferenceGit.to_json())

# convert the object into a dict
config_v2_reference_git_dict = config_v2_reference_git_instance.to_dict()
# create an instance of ConfigV2ReferenceGit from a dict
config_v2_reference_git_from_dict = ConfigV2ReferenceGit.from_dict(config_v2_reference_git_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



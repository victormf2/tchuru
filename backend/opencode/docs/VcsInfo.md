# VcsInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**branch** | **str** |  | [optional] 
**default_branch** | **str** |  | [optional] 

## Example

```python
from opencode_sdk.models.vcs_info import VcsInfo

# TODO update the JSON string below
json = "{}"
# create an instance of VcsInfo from a JSON string
vcs_info_instance = VcsInfo.from_json(json)
# print the JSON string representation of the object
print(VcsInfo.to_json())

# convert the object into a dict
vcs_info_dict = vcs_info_instance.to_dict()
# create an instance of VcsInfo from a dict
vcs_info_from_dict = VcsInfo.from_dict(vcs_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



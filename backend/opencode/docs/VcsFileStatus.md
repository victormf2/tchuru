# VcsFileStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file** | **str** |  | 
**additions** | **float** |  | 
**deletions** | **float** |  | 
**status** | **str** |  | 

## Example

```python
from opencode_sdk.models.vcs_file_status import VcsFileStatus

# TODO update the JSON string below
json = "{}"
# create an instance of VcsFileStatus from a JSON string
vcs_file_status_instance = VcsFileStatus.from_json(json)
# print the JSON string representation of the object
print(VcsFileStatus.to_json())

# convert the object into a dict
vcs_file_status_dict = vcs_file_status_instance.to_dict()
# create an instance of VcsFileStatus from a dict
vcs_file_status_from_dict = VcsFileStatus.from_dict(vcs_file_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



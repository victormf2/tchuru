# VcsApplyErrorData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  | 
**reason** | **str** |  | 

## Example

```python
from opencode_sdk.models.vcs_apply_error_data import VcsApplyErrorData

# TODO update the JSON string below
json = "{}"
# create an instance of VcsApplyErrorData from a JSON string
vcs_apply_error_data_instance = VcsApplyErrorData.from_json(json)
# print the JSON string representation of the object
print(VcsApplyErrorData.to_json())

# convert the object into a dict
vcs_apply_error_data_dict = vcs_apply_error_data_instance.to_dict()
# create an instance of VcsApplyErrorData from a dict
vcs_apply_error_data_from_dict = VcsApplyErrorData.from_dict(vcs_apply_error_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# VcsApplyError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**data** | [**VcsApplyErrorData**](VcsApplyErrorData.md) |  | 

## Example

```python
from opencode_sdk.models.vcs_apply_error import VcsApplyError

# TODO update the JSON string below
json = "{}"
# create an instance of VcsApplyError from a JSON string
vcs_apply_error_instance = VcsApplyError.from_json(json)
# print the JSON string representation of the object
print(VcsApplyError.to_json())

# convert the object into a dict
vcs_apply_error_dict = vcs_apply_error_instance.to_dict()
# create an instance of VcsApplyError from a dict
vcs_apply_error_from_dict = VcsApplyError.from_dict(vcs_apply_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



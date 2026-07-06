# VcsApplyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**patch** | **str** |  | 

## Example

```python
from opencode_sdk.models.vcs_apply_request import VcsApplyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of VcsApplyRequest from a JSON string
vcs_apply_request_instance = VcsApplyRequest.from_json(json)
# print the JSON string representation of the object
print(VcsApplyRequest.to_json())

# convert the object into a dict
vcs_apply_request_dict = vcs_apply_request_instance.to_dict()
# create an instance of VcsApplyRequest from a dict
vcs_apply_request_from_dict = VcsApplyRequest.from_dict(vcs_apply_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



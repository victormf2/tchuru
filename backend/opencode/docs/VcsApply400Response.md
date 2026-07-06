# VcsApply400Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**data** | [**VcsApplyErrorData**](VcsApplyErrorData.md) |  | 
**tag** | **str** |  | 
**message** | **str** |  | 
**kind** | **str** |  | [optional] 
**var_field** | **str** |  | [optional] 

## Example

```python
from opencode_sdk.models.vcs_apply400_response import VcsApply400Response

# TODO update the JSON string below
json = "{}"
# create an instance of VcsApply400Response from a JSON string
vcs_apply400_response_instance = VcsApply400Response.from_json(json)
# print the JSON string representation of the object
print(VcsApply400Response.to_json())

# convert the object into a dict
vcs_apply400_response_dict = vcs_apply400_response_instance.to_dict()
# create an instance of VcsApply400Response from a dict
vcs_apply400_response_from_dict = VcsApply400Response.from_dict(vcs_apply400_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



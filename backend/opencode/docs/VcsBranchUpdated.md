# VcsBranchUpdated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**GlobalEventPayloadAnyOf80Properties**](GlobalEventPayloadAnyOf80Properties.md) |  | 

## Example

```python
from opencode_sdk.models.vcs_branch_updated import VcsBranchUpdated

# TODO update the JSON string below
json = "{}"
# create an instance of VcsBranchUpdated from a JSON string
vcs_branch_updated_instance = VcsBranchUpdated.from_json(json)
# print the JSON string representation of the object
print(VcsBranchUpdated.to_json())

# convert the object into a dict
vcs_branch_updated_dict = vcs_branch_updated_instance.to_dict()
# create an instance of VcsBranchUpdated from a dict
vcs_branch_updated_from_dict = VcsBranchUpdated.from_dict(vcs_branch_updated_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



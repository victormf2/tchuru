# EventVcsBranchUpdated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf80Properties**](GlobalEventPayloadAnyOf80Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_vcs_branch_updated import EventVcsBranchUpdated

# TODO update the JSON string below
json = "{}"
# create an instance of EventVcsBranchUpdated from a JSON string
event_vcs_branch_updated_instance = EventVcsBranchUpdated.from_json(json)
# print the JSON string representation of the object
print(EventVcsBranchUpdated.to_json())

# convert the object into a dict
event_vcs_branch_updated_dict = event_vcs_branch_updated_instance.to_dict()
# create an instance of EventVcsBranchUpdated from a dict
event_vcs_branch_updated_from_dict = EventVcsBranchUpdated.from_dict(event_vcs_branch_updated_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



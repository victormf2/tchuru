# RevertState


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message_id** | **str** |  | 
**part_id** | **str** |  | [optional] 
**snapshot** | **str** |  | [optional] 
**diff** | **str** |  | [optional] 
**files** | [**List[FileDiff]**](FileDiff.md) |  | [optional] 

## Example

```python
from opencode_sdk.models.revert_state import RevertState

# TODO update the JSON string below
json = "{}"
# create an instance of RevertState from a JSON string
revert_state_instance = RevertState.from_json(json)
# print the JSON string representation of the object
print(RevertState.to_json())

# convert the object into a dict
revert_state_dict = revert_state_instance.to_dict()
# create an instance of RevertState from a dict
revert_state_from_dict = RevertState.from_dict(revert_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



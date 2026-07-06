# SessionRevert


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message_id** | **str** |  | 
**part_id** | **str** |  | [optional] 
**snapshot** | **str** |  | [optional] 
**diff** | **str** |  | [optional] 

## Example

```python
from opencode_sdk.models.session_revert import SessionRevert

# TODO update the JSON string below
json = "{}"
# create an instance of SessionRevert from a JSON string
session_revert_instance = SessionRevert.from_json(json)
# print the JSON string representation of the object
print(SessionRevert.to_json())

# convert the object into a dict
session_revert_dict = session_revert_instance.to_dict()
# create an instance of SessionRevert from a dict
session_revert_from_dict = SessionRevert.from_dict(session_revert_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



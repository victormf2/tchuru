# MoveSessionError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**data** | [**MoveSessionErrorData**](MoveSessionErrorData.md) |  | 

## Example

```python
from opencode_sdk.models.move_session_error import MoveSessionError

# TODO update the JSON string below
json = "{}"
# create an instance of MoveSessionError from a JSON string
move_session_error_instance = MoveSessionError.from_json(json)
# print the JSON string representation of the object
print(MoveSessionError.to_json())

# convert the object into a dict
move_session_error_dict = move_session_error_instance.to_dict()
# create an instance of MoveSessionError from a dict
move_session_error_from_dict = MoveSessionError.from_dict(move_session_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



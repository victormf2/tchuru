# SessionStatusAnyOf1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attempt** | **int** |  | 
**message** | **str** |  | 
**action** | [**SessionStatusAnyOf1Action**](SessionStatusAnyOf1Action.md) |  | [optional] 
**next** | **int** |  | 

## Example

```python
from opencode_sdk.models.session_status_any_of1 import SessionStatusAnyOf1

# TODO update the JSON string below
json = "{}"
# create an instance of SessionStatusAnyOf1 from a JSON string
session_status_any_of1_instance = SessionStatusAnyOf1.from_json(json)
# print the JSON string representation of the object
print(SessionStatusAnyOf1.to_json())

# convert the object into a dict
session_status_any_of1_dict = session_status_any_of1_instance.to_dict()
# create an instance of SessionStatusAnyOf1 from a dict
session_status_any_of1_from_dict = SessionStatusAnyOf1.from_dict(session_status_any_of1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



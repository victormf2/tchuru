# SessionNotFoundError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tag** | **str** |  | 
**session_id** | **str** |  | 
**message** | **str** |  | 

## Example

```python
from opencode_sdk.models.session_not_found_error import SessionNotFoundError

# TODO update the JSON string below
json = "{}"
# create an instance of SessionNotFoundError from a JSON string
session_not_found_error_instance = SessionNotFoundError.from_json(json)
# print the JSON string representation of the object
print(SessionNotFoundError.to_json())

# convert the object into a dict
session_not_found_error_dict = session_not_found_error_instance.to_dict()
# create an instance of SessionNotFoundError from a dict
session_not_found_error_from_dict = SessionNotFoundError.from_dict(session_not_found_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



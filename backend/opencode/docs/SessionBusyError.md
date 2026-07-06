# SessionBusyError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tag** | **str** |  | 
**session_id** | **str** |  | 
**message** | **str** |  | 

## Example

```python
from opencode_sdk.models.session_busy_error import SessionBusyError

# TODO update the JSON string below
json = "{}"
# create an instance of SessionBusyError from a JSON string
session_busy_error_instance = SessionBusyError.from_json(json)
# print the JSON string representation of the object
print(SessionBusyError.to_json())

# convert the object into a dict
session_busy_error_dict = session_busy_error_instance.to_dict()
# create an instance of SessionBusyError from a dict
session_busy_error_from_dict = SessionBusyError.from_dict(session_busy_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



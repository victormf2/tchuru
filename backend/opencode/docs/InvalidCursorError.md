# InvalidCursorError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tag** | **str** |  | 
**message** | **str** |  | 

## Example

```python
from opencode_sdk.models.invalid_cursor_error import InvalidCursorError

# TODO update the JSON string below
json = "{}"
# create an instance of InvalidCursorError from a JSON string
invalid_cursor_error_instance = InvalidCursorError.from_json(json)
# print the JSON string representation of the object
print(InvalidCursorError.to_json())

# convert the object into a dict
invalid_cursor_error_dict = invalid_cursor_error_instance.to_dict()
# create an instance of InvalidCursorError from a dict
invalid_cursor_error_from_dict = InvalidCursorError.from_dict(invalid_cursor_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



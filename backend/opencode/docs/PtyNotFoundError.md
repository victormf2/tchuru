# PtyNotFoundError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tag** | **str** |  | 
**pty_id** | **str** |  | 
**message** | **str** |  | 

## Example

```python
from opencode_sdk.models.pty_not_found_error import PtyNotFoundError

# TODO update the JSON string below
json = "{}"
# create an instance of PtyNotFoundError from a JSON string
pty_not_found_error_instance = PtyNotFoundError.from_json(json)
# print the JSON string representation of the object
print(PtyNotFoundError.to_json())

# convert the object into a dict
pty_not_found_error_dict = pty_not_found_error_instance.to_dict()
# create an instance of PtyNotFoundError from a dict
pty_not_found_error_from_dict = PtyNotFoundError.from_dict(pty_not_found_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



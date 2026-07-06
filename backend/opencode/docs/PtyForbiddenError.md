# PtyForbiddenError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tag** | **str** |  | 
**message** | **str** |  | 

## Example

```python
from opencode_sdk.models.pty_forbidden_error import PtyForbiddenError

# TODO update the JSON string below
json = "{}"
# create an instance of PtyForbiddenError from a JSON string
pty_forbidden_error_instance = PtyForbiddenError.from_json(json)
# print the JSON string representation of the object
print(PtyForbiddenError.to_json())

# convert the object into a dict
pty_forbidden_error_dict = pty_forbidden_error_instance.to_dict()
# create an instance of PtyForbiddenError from a dict
pty_forbidden_error_from_dict = PtyForbiddenError.from_dict(pty_forbidden_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



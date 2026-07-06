# PtyUpdateRequestSize


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rows** | **int** |  | 
**cols** | **int** |  | 

## Example

```python
from opencode_sdk.models.pty_update_request_size import PtyUpdateRequestSize

# TODO update the JSON string below
json = "{}"
# create an instance of PtyUpdateRequestSize from a JSON string
pty_update_request_size_instance = PtyUpdateRequestSize.from_json(json)
# print the JSON string representation of the object
print(PtyUpdateRequestSize.to_json())

# convert the object into a dict
pty_update_request_size_dict = pty_update_request_size_instance.to_dict()
# create an instance of PtyUpdateRequestSize from a dict
pty_update_request_size_from_dict = PtyUpdateRequestSize.from_dict(pty_update_request_size_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



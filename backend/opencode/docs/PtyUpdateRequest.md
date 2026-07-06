# PtyUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **str** |  | [optional] 
**size** | [**PtyUpdateRequestSize**](PtyUpdateRequestSize.md) |  | [optional] 

## Example

```python
from opencode_sdk.models.pty_update_request import PtyUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PtyUpdateRequest from a JSON string
pty_update_request_instance = PtyUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(PtyUpdateRequest.to_json())

# convert the object into a dict
pty_update_request_dict = pty_update_request_instance.to_dict()
# create an instance of PtyUpdateRequest from a dict
pty_update_request_from_dict = PtyUpdateRequest.from_dict(pty_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



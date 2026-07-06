# PermissionReplyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reply** | **str** |  | 
**message** | **str** |  | [optional] 

## Example

```python
from opencode_sdk.models.permission_reply_request import PermissionReplyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PermissionReplyRequest from a JSON string
permission_reply_request_instance = PermissionReplyRequest.from_json(json)
# print the JSON string representation of the object
print(PermissionReplyRequest.to_json())

# convert the object into a dict
permission_reply_request_dict = permission_reply_request_instance.to_dict()
# create an instance of PermissionReplyRequest from a dict
permission_reply_request_from_dict = PermissionReplyRequest.from_dict(permission_reply_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# V2SessionPermissionReplyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reply** | [**PermissionV2Reply**](PermissionV2Reply.md) |  | 
**message** | **str** |  | [optional] 

## Example

```python
from opencode_sdk.models.v2_session_permission_reply_request import V2SessionPermissionReplyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of V2SessionPermissionReplyRequest from a JSON string
v2_session_permission_reply_request_instance = V2SessionPermissionReplyRequest.from_json(json)
# print the JSON string representation of the object
print(V2SessionPermissionReplyRequest.to_json())

# convert the object into a dict
v2_session_permission_reply_request_dict = v2_session_permission_reply_request_instance.to_dict()
# create an instance of V2SessionPermissionReplyRequest from a dict
v2_session_permission_reply_request_from_dict = V2SessionPermissionReplyRequest.from_dict(v2_session_permission_reply_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



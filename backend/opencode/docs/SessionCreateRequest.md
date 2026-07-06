# SessionCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parent_id** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**agent** | **str** |  | [optional] 
**model** | [**SessionCreateRequestModel**](SessionCreateRequestModel.md) |  | [optional] 
**metadata** | **object** |  | [optional] 
**permission** | [**List[PermissionRule]**](PermissionRule.md) |  | [optional] 
**workspace_id** | **str** |  | [optional] 

## Example

```python
from opencode_sdk.models.session_create_request import SessionCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SessionCreateRequest from a JSON string
session_create_request_instance = SessionCreateRequest.from_json(json)
# print the JSON string representation of the object
print(SessionCreateRequest.to_json())

# convert the object into a dict
session_create_request_dict = session_create_request_instance.to_dict()
# create an instance of SessionCreateRequest from a dict
session_create_request_from_dict = SessionCreateRequest.from_dict(session_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



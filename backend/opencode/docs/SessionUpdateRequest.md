# SessionUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **str** |  | [optional] 
**metadata** | **object** |  | [optional] 
**permission** | [**List[PermissionRule]**](PermissionRule.md) |  | [optional] 
**time** | [**SessionUpdateRequestTime**](SessionUpdateRequestTime.md) |  | [optional] 

## Example

```python
from opencode_sdk.models.session_update_request import SessionUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SessionUpdateRequest from a JSON string
session_update_request_instance = SessionUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(SessionUpdateRequest.to_json())

# convert the object into a dict
session_update_request_dict = session_update_request_instance.to_dict()
# create an instance of SessionUpdateRequest from a dict
session_update_request_from_dict = SessionUpdateRequest.from_dict(session_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



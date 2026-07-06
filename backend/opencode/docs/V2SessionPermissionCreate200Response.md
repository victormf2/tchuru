# V2SessionPermissionCreate200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**V2SessionPermissionCreate200ResponseData**](V2SessionPermissionCreate200ResponseData.md) |  | 

## Example

```python
from opencode_sdk.models.v2_session_permission_create200_response import V2SessionPermissionCreate200Response

# TODO update the JSON string below
json = "{}"
# create an instance of V2SessionPermissionCreate200Response from a JSON string
v2_session_permission_create200_response_instance = V2SessionPermissionCreate200Response.from_json(json)
# print the JSON string representation of the object
print(V2SessionPermissionCreate200Response.to_json())

# convert the object into a dict
v2_session_permission_create200_response_dict = v2_session_permission_create200_response_instance.to_dict()
# create an instance of V2SessionPermissionCreate200Response from a dict
v2_session_permission_create200_response_from_dict = V2SessionPermissionCreate200Response.from_dict(v2_session_permission_create200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



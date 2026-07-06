# V2SessionPermissionCreate200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**effect** | [**PermissionV2Effect**](PermissionV2Effect.md) |  | 

## Example

```python
from opencode_sdk.models.v2_session_permission_create200_response_data import V2SessionPermissionCreate200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of V2SessionPermissionCreate200ResponseData from a JSON string
v2_session_permission_create200_response_data_instance = V2SessionPermissionCreate200ResponseData.from_json(json)
# print the JSON string representation of the object
print(V2SessionPermissionCreate200ResponseData.to_json())

# convert the object into a dict
v2_session_permission_create200_response_data_dict = v2_session_permission_create200_response_data_instance.to_dict()
# create an instance of V2SessionPermissionCreate200ResponseData from a dict
v2_session_permission_create200_response_data_from_dict = V2SessionPermissionCreate200ResponseData.from_dict(v2_session_permission_create200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



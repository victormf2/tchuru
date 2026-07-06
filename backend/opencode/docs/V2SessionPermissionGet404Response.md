# V2SessionPermissionGet404Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tag** | **str** |  | 
**request_id** | **str** |  | 
**message** | **str** |  | 
**session_id** | **str** |  | 

## Example

```python
from opencode_sdk.models.v2_session_permission_get404_response import V2SessionPermissionGet404Response

# TODO update the JSON string below
json = "{}"
# create an instance of V2SessionPermissionGet404Response from a JSON string
v2_session_permission_get404_response_instance = V2SessionPermissionGet404Response.from_json(json)
# print the JSON string representation of the object
print(V2SessionPermissionGet404Response.to_json())

# convert the object into a dict
v2_session_permission_get404_response_dict = v2_session_permission_get404_response_instance.to_dict()
# create an instance of V2SessionPermissionGet404Response from a dict
v2_session_permission_get404_response_from_dict = V2SessionPermissionGet404Response.from_dict(v2_session_permission_get404_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



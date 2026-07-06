# PermissionRespond404Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**data** | [**NotFoundErrorData**](NotFoundErrorData.md) |  | 
**tag** | **str** |  | 
**request_id** | **str** |  | 
**message** | **str** |  | 

## Example

```python
from opencode_sdk.models.permission_respond404_response import PermissionRespond404Response

# TODO update the JSON string below
json = "{}"
# create an instance of PermissionRespond404Response from a JSON string
permission_respond404_response_instance = PermissionRespond404Response.from_json(json)
# print the JSON string representation of the object
print(PermissionRespond404Response.to_json())

# convert the object into a dict
permission_respond404_response_dict = permission_respond404_response_instance.to_dict()
# create an instance of PermissionRespond404Response from a dict
permission_respond404_response_from_dict = PermissionRespond404Response.from_dict(permission_respond404_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



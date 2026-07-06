# AuthSet400Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tag** | **str** |  | 
**message** | **str** |  | 
**kind** | **str** |  | [optional] 
**var_field** | **str** |  | [optional] 

## Example

```python
from opencode_sdk.models.auth_set400_response import AuthSet400Response

# TODO update the JSON string below
json = "{}"
# create an instance of AuthSet400Response from a JSON string
auth_set400_response_instance = AuthSet400Response.from_json(json)
# print the JSON string representation of the object
print(AuthSet400Response.to_json())

# convert the object into a dict
auth_set400_response_dict = auth_set400_response_instance.to_dict()
# create an instance of AuthSet400Response from a dict
auth_set400_response_from_dict = AuthSet400Response.from_dict(auth_set400_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



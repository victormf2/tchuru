# OAuth


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**refresh** | **str** |  | 
**access** | **str** |  | 
**expires** | **int** |  | 
**account_id** | **str** |  | [optional] 
**enterprise_url** | **str** |  | [optional] 

## Example

```python
from opencode_sdk.models.o_auth import OAuth

# TODO update the JSON string below
json = "{}"
# create an instance of OAuth from a JSON string
o_auth_instance = OAuth.from_json(json)
# print the JSON string representation of the object
print(OAuth.to_json())

# convert the object into a dict
o_auth_dict = o_auth_instance.to_dict()
# create an instance of OAuth from a dict
o_auth_from_dict = OAuth.from_dict(o_auth_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



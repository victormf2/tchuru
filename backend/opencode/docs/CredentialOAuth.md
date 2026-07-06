# CredentialOAuth


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**method_id** | **str** |  | 
**refresh** | **str** |  | 
**access** | **str** |  | 
**expires** | **int** |  | 
**metadata** | **object** |  | [optional] 

## Example

```python
from opencode_sdk.models.credential_o_auth import CredentialOAuth

# TODO update the JSON string below
json = "{}"
# create an instance of CredentialOAuth from a JSON string
credential_o_auth_instance = CredentialOAuth.from_json(json)
# print the JSON string representation of the object
print(CredentialOAuth.to_json())

# convert the object into a dict
credential_o_auth_dict = credential_o_auth_instance.to_dict()
# create an instance of CredentialOAuth from a dict
credential_o_auth_from_dict = CredentialOAuth.from_dict(credential_o_auth_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



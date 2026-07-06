# CredentialValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**method_id** | **str** |  | 
**refresh** | **str** |  | 
**access** | **str** |  | 
**expires** | **int** |  | 
**metadata** | **object** |  | [optional] 
**key** | **str** |  | 

## Example

```python
from opencode_sdk.models.credential_value import CredentialValue

# TODO update the JSON string below
json = "{}"
# create an instance of CredentialValue from a JSON string
credential_value_instance = CredentialValue.from_json(json)
# print the JSON string representation of the object
print(CredentialValue.to_json())

# convert the object into a dict
credential_value_dict = credential_value_instance.to_dict()
# create an instance of CredentialValue from a dict
credential_value_from_dict = CredentialValue.from_dict(credential_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



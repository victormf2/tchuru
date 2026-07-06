# ConnectionCredentialInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**label** | **str** |  | 

## Example

```python
from opencode_sdk.models.connection_credential_info import ConnectionCredentialInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionCredentialInfo from a JSON string
connection_credential_info_instance = ConnectionCredentialInfo.from_json(json)
# print the JSON string representation of the object
print(ConnectionCredentialInfo.to_json())

# convert the object into a dict
connection_credential_info_dict = connection_credential_info_instance.to_dict()
# create an instance of ConnectionCredentialInfo from a dict
connection_credential_info_from_dict = ConnectionCredentialInfo.from_dict(connection_credential_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



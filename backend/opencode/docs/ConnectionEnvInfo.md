# ConnectionEnvInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**name** | **str** |  | 

## Example

```python
from opencode_sdk.models.connection_env_info import ConnectionEnvInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionEnvInfo from a JSON string
connection_env_info_instance = ConnectionEnvInfo.from_json(json)
# print the JSON string representation of the object
print(ConnectionEnvInfo.to_json())

# convert the object into a dict
connection_env_info_dict = connection_env_info_instance.to_dict()
# create an instance of ConnectionEnvInfo from a dict
connection_env_info_from_dict = ConnectionEnvInfo.from_dict(connection_env_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



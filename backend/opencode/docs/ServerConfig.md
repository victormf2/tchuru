# ServerConfig

Server configuration for opencode serve and web commands

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**port** | **int** |  | [optional] 
**hostname** | **str** |  | [optional] 
**mdns** | **bool** |  | [optional] 
**mdns_domain** | **str** |  | [optional] 
**cors** | **List[str]** |  | [optional] 

## Example

```python
from opencode_sdk.models.server_config import ServerConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ServerConfig from a JSON string
server_config_instance = ServerConfig.from_json(json)
# print the JSON string representation of the object
print(ServerConfig.to_json())

# convert the object into a dict
server_config_dict = server_config_instance.to_dict()
# create an instance of ServerConfig from a dict
server_config_from_dict = ServerConfig.from_dict(server_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



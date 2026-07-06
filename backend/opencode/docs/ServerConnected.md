# ServerConnected


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | **object** |  | 

## Example

```python
from opencode_sdk.models.server_connected import ServerConnected

# TODO update the JSON string below
json = "{}"
# create an instance of ServerConnected from a JSON string
server_connected_instance = ServerConnected.from_json(json)
# print the JSON string representation of the object
print(ServerConnected.to_json())

# convert the object into a dict
server_connected_dict = server_connected_instance.to_dict()
# create an instance of ServerConnected from a dict
server_connected_from_dict = ServerConnected.from_dict(server_connected_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



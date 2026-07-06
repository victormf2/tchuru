# PluginAdded


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**GlobalEventPayloadAnyOf52Properties**](GlobalEventPayloadAnyOf52Properties.md) |  | 

## Example

```python
from opencode_sdk.models.plugin_added import PluginAdded

# TODO update the JSON string below
json = "{}"
# create an instance of PluginAdded from a JSON string
plugin_added_instance = PluginAdded.from_json(json)
# print the JSON string representation of the object
print(PluginAdded.to_json())

# convert the object into a dict
plugin_added_dict = plugin_added_instance.to_dict()
# create an instance of PluginAdded from a dict
plugin_added_from_dict = PluginAdded.from_dict(plugin_added_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



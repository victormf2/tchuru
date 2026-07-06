# EventPluginAdded


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf52Properties**](GlobalEventPayloadAnyOf52Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_plugin_added import EventPluginAdded

# TODO update the JSON string below
json = "{}"
# create an instance of EventPluginAdded from a JSON string
event_plugin_added_instance = EventPluginAdded.from_json(json)
# print the JSON string representation of the object
print(EventPluginAdded.to_json())

# convert the object into a dict
event_plugin_added_dict = event_plugin_added_instance.to_dict()
# create an instance of EventPluginAdded from a dict
event_plugin_added_from_dict = EventPluginAdded.from_dict(event_plugin_added_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



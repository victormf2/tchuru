# EventServerConnected


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | **object** |  | 

## Example

```python
from opencode_sdk.models.event_server_connected import EventServerConnected

# TODO update the JSON string below
json = "{}"
# create an instance of EventServerConnected from a JSON string
event_server_connected_instance = EventServerConnected.from_json(json)
# print the JSON string representation of the object
print(EventServerConnected.to_json())

# convert the object into a dict
event_server_connected_dict = event_server_connected_instance.to_dict()
# create an instance of EventServerConnected from a dict
event_server_connected_from_dict = EventServerConnected.from_dict(event_server_connected_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



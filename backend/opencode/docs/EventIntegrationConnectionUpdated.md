# EventIntegrationConnectionUpdated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf2Properties**](GlobalEventPayloadAnyOf2Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_integration_connection_updated import EventIntegrationConnectionUpdated

# TODO update the JSON string below
json = "{}"
# create an instance of EventIntegrationConnectionUpdated from a JSON string
event_integration_connection_updated_instance = EventIntegrationConnectionUpdated.from_json(json)
# print the JSON string representation of the object
print(EventIntegrationConnectionUpdated.to_json())

# convert the object into a dict
event_integration_connection_updated_dict = event_integration_connection_updated_instance.to_dict()
# create an instance of EventIntegrationConnectionUpdated from a dict
event_integration_connection_updated_from_dict = EventIntegrationConnectionUpdated.from_dict(event_integration_connection_updated_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



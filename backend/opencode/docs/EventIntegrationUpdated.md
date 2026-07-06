# EventIntegrationUpdated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | **object** |  | 

## Example

```python
from opencode_sdk.models.event_integration_updated import EventIntegrationUpdated

# TODO update the JSON string below
json = "{}"
# create an instance of EventIntegrationUpdated from a JSON string
event_integration_updated_instance = EventIntegrationUpdated.from_json(json)
# print the JSON string representation of the object
print(EventIntegrationUpdated.to_json())

# convert the object into a dict
event_integration_updated_dict = event_integration_updated_instance.to_dict()
# create an instance of EventIntegrationUpdated from a dict
event_integration_updated_from_dict = EventIntegrationUpdated.from_dict(event_integration_updated_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



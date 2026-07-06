# EventInstallationUpdated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf46Properties**](GlobalEventPayloadAnyOf46Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_installation_updated import EventInstallationUpdated

# TODO update the JSON string below
json = "{}"
# create an instance of EventInstallationUpdated from a JSON string
event_installation_updated_instance = EventInstallationUpdated.from_json(json)
# print the JSON string representation of the object
print(EventInstallationUpdated.to_json())

# convert the object into a dict
event_installation_updated_dict = event_installation_updated_instance.to_dict()
# create an instance of EventInstallationUpdated from a dict
event_installation_updated_from_dict = EventInstallationUpdated.from_dict(event_installation_updated_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



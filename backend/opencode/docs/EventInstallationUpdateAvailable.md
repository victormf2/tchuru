# EventInstallationUpdateAvailable


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf46Properties**](GlobalEventPayloadAnyOf46Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_installation_update_available import EventInstallationUpdateAvailable

# TODO update the JSON string below
json = "{}"
# create an instance of EventInstallationUpdateAvailable from a JSON string
event_installation_update_available_instance = EventInstallationUpdateAvailable.from_json(json)
# print the JSON string representation of the object
print(EventInstallationUpdateAvailable.to_json())

# convert the object into a dict
event_installation_update_available_dict = event_installation_update_available_instance.to_dict()
# create an instance of EventInstallationUpdateAvailable from a dict
event_installation_update_available_from_dict = EventInstallationUpdateAvailable.from_dict(event_installation_update_available_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



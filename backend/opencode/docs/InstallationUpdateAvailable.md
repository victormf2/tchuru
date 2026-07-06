# InstallationUpdateAvailable


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**GlobalEventPayloadAnyOf46Properties**](GlobalEventPayloadAnyOf46Properties.md) |  | 

## Example

```python
from opencode_sdk.models.installation_update_available import InstallationUpdateAvailable

# TODO update the JSON string below
json = "{}"
# create an instance of InstallationUpdateAvailable from a JSON string
installation_update_available_instance = InstallationUpdateAvailable.from_json(json)
# print the JSON string representation of the object
print(InstallationUpdateAvailable.to_json())

# convert the object into a dict
installation_update_available_dict = installation_update_available_instance.to_dict()
# create an instance of InstallationUpdateAvailable from a dict
installation_update_available_from_dict = InstallationUpdateAvailable.from_dict(installation_update_available_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# InstallationUpdated


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
from opencode_sdk.models.installation_updated import InstallationUpdated

# TODO update the JSON string below
json = "{}"
# create an instance of InstallationUpdated from a JSON string
installation_updated_instance = InstallationUpdated.from_json(json)
# print the JSON string representation of the object
print(InstallationUpdated.to_json())

# convert the object into a dict
installation_updated_dict = installation_updated_instance.to_dict()
# create an instance of InstallationUpdated from a dict
installation_updated_from_dict = InstallationUpdated.from_dict(installation_updated_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



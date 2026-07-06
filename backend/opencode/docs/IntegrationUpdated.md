# IntegrationUpdated


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
from opencode_sdk.models.integration_updated import IntegrationUpdated

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationUpdated from a JSON string
integration_updated_instance = IntegrationUpdated.from_json(json)
# print the JSON string representation of the object
print(IntegrationUpdated.to_json())

# convert the object into a dict
integration_updated_dict = integration_updated_instance.to_dict()
# create an instance of IntegrationUpdated from a dict
integration_updated_from_dict = IntegrationUpdated.from_dict(integration_updated_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



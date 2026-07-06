# IntegrationConnectionUpdated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**GlobalEventPayloadAnyOf2Properties**](GlobalEventPayloadAnyOf2Properties.md) |  | 

## Example

```python
from opencode_sdk.models.integration_connection_updated import IntegrationConnectionUpdated

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationConnectionUpdated from a JSON string
integration_connection_updated_instance = IntegrationConnectionUpdated.from_json(json)
# print the JSON string representation of the object
print(IntegrationConnectionUpdated.to_json())

# convert the object into a dict
integration_connection_updated_dict = integration_connection_updated_instance.to_dict()
# create an instance of IntegrationConnectionUpdated from a dict
integration_connection_updated_from_dict = IntegrationConnectionUpdated.from_dict(integration_connection_updated_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



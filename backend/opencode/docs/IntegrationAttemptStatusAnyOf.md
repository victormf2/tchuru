# IntegrationAttemptStatusAnyOf


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | 
**time** | [**IntegrationAttemptTime**](IntegrationAttemptTime.md) |  | 

## Example

```python
from opencode_sdk.models.integration_attempt_status_any_of import IntegrationAttemptStatusAnyOf

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationAttemptStatusAnyOf from a JSON string
integration_attempt_status_any_of_instance = IntegrationAttemptStatusAnyOf.from_json(json)
# print the JSON string representation of the object
print(IntegrationAttemptStatusAnyOf.to_json())

# convert the object into a dict
integration_attempt_status_any_of_dict = integration_attempt_status_any_of_instance.to_dict()
# create an instance of IntegrationAttemptStatusAnyOf from a dict
integration_attempt_status_any_of_from_dict = IntegrationAttemptStatusAnyOf.from_dict(integration_attempt_status_any_of_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



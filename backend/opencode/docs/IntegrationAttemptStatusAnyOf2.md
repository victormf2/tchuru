# IntegrationAttemptStatusAnyOf2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | 
**message** | **str** |  | 
**time** | [**IntegrationAttemptTime**](IntegrationAttemptTime.md) |  | 

## Example

```python
from opencode_sdk.models.integration_attempt_status_any_of2 import IntegrationAttemptStatusAnyOf2

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationAttemptStatusAnyOf2 from a JSON string
integration_attempt_status_any_of2_instance = IntegrationAttemptStatusAnyOf2.from_json(json)
# print the JSON string representation of the object
print(IntegrationAttemptStatusAnyOf2.to_json())

# convert the object into a dict
integration_attempt_status_any_of2_dict = integration_attempt_status_any_of2_instance.to_dict()
# create an instance of IntegrationAttemptStatusAnyOf2 from a dict
integration_attempt_status_any_of2_from_dict = IntegrationAttemptStatusAnyOf2.from_dict(integration_attempt_status_any_of2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



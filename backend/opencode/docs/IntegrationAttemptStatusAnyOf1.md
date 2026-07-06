# IntegrationAttemptStatusAnyOf1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | 
**time** | [**IntegrationAttemptTime**](IntegrationAttemptTime.md) |  | 

## Example

```python
from opencode_sdk.models.integration_attempt_status_any_of1 import IntegrationAttemptStatusAnyOf1

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationAttemptStatusAnyOf1 from a JSON string
integration_attempt_status_any_of1_instance = IntegrationAttemptStatusAnyOf1.from_json(json)
# print the JSON string representation of the object
print(IntegrationAttemptStatusAnyOf1.to_json())

# convert the object into a dict
integration_attempt_status_any_of1_dict = integration_attempt_status_any_of1_instance.to_dict()
# create an instance of IntegrationAttemptStatusAnyOf1 from a dict
integration_attempt_status_any_of1_from_dict = IntegrationAttemptStatusAnyOf1.from_dict(integration_attempt_status_any_of1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



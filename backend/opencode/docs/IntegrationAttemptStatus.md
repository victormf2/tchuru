# IntegrationAttemptStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | 
**time** | [**IntegrationAttemptTime**](IntegrationAttemptTime.md) |  | 
**message** | **str** |  | 

## Example

```python
from opencode_sdk.models.integration_attempt_status import IntegrationAttemptStatus

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationAttemptStatus from a JSON string
integration_attempt_status_instance = IntegrationAttemptStatus.from_json(json)
# print the JSON string representation of the object
print(IntegrationAttemptStatus.to_json())

# convert the object into a dict
integration_attempt_status_dict = integration_attempt_status_instance.to_dict()
# create an instance of IntegrationAttemptStatus from a dict
integration_attempt_status_from_dict = IntegrationAttemptStatus.from_dict(integration_attempt_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# IntegrationAttempt


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attempt_id** | **str** |  | 
**url** | **str** |  | 
**instructions** | **str** |  | 
**mode** | **str** |  | 
**time** | [**IntegrationAttemptTime**](IntegrationAttemptTime.md) |  | 

## Example

```python
from opencode_sdk.models.integration_attempt import IntegrationAttempt

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationAttempt from a JSON string
integration_attempt_instance = IntegrationAttempt.from_json(json)
# print the JSON string representation of the object
print(IntegrationAttempt.to_json())

# convert the object into a dict
integration_attempt_dict = integration_attempt_instance.to_dict()
# create an instance of IntegrationAttempt from a dict
integration_attempt_from_dict = IntegrationAttempt.from_dict(integration_attempt_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



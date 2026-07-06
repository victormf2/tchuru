# IntegrationAttemptTime


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | [**WorkspaceTimeUsed**](WorkspaceTimeUsed.md) |  | 
**expires** | [**WorkspaceTimeUsed**](WorkspaceTimeUsed.md) |  | 

## Example

```python
from opencode_sdk.models.integration_attempt_time import IntegrationAttemptTime

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationAttemptTime from a JSON string
integration_attempt_time_instance = IntegrationAttemptTime.from_json(json)
# print the JSON string representation of the object
print(IntegrationAttemptTime.to_json())

# convert the object into a dict
integration_attempt_time_dict = integration_attempt_time_instance.to_dict()
# create an instance of IntegrationAttemptTime from a dict
integration_attempt_time_from_dict = IntegrationAttemptTime.from_dict(integration_attempt_time_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



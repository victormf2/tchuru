# ExperimentalConsoleSwitchOrgRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** |  | 
**org_id** | **str** |  | 

## Example

```python
from opencode_sdk.models.experimental_console_switch_org_request import ExperimentalConsoleSwitchOrgRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ExperimentalConsoleSwitchOrgRequest from a JSON string
experimental_console_switch_org_request_instance = ExperimentalConsoleSwitchOrgRequest.from_json(json)
# print the JSON string representation of the object
print(ExperimentalConsoleSwitchOrgRequest.to_json())

# convert the object into a dict
experimental_console_switch_org_request_dict = experimental_console_switch_org_request_instance.to_dict()
# create an instance of ExperimentalConsoleSwitchOrgRequest from a dict
experimental_console_switch_org_request_from_dict = ExperimentalConsoleSwitchOrgRequest.from_dict(experimental_console_switch_org_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ExperimentalConsoleListOrgs200ResponseOrgsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** |  | 
**account_email** | **str** |  | 
**account_url** | **str** |  | 
**org_id** | **str** |  | 
**org_name** | **str** |  | 
**active** | **bool** |  | 

## Example

```python
from opencode_sdk.models.experimental_console_list_orgs200_response_orgs_inner import ExperimentalConsoleListOrgs200ResponseOrgsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ExperimentalConsoleListOrgs200ResponseOrgsInner from a JSON string
experimental_console_list_orgs200_response_orgs_inner_instance = ExperimentalConsoleListOrgs200ResponseOrgsInner.from_json(json)
# print the JSON string representation of the object
print(ExperimentalConsoleListOrgs200ResponseOrgsInner.to_json())

# convert the object into a dict
experimental_console_list_orgs200_response_orgs_inner_dict = experimental_console_list_orgs200_response_orgs_inner_instance.to_dict()
# create an instance of ExperimentalConsoleListOrgs200ResponseOrgsInner from a dict
experimental_console_list_orgs200_response_orgs_inner_from_dict = ExperimentalConsoleListOrgs200ResponseOrgsInner.from_dict(experimental_console_list_orgs200_response_orgs_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



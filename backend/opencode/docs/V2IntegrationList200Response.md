# V2IntegrationList200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | [**LocationInfo**](LocationInfo.md) |  | 
**data** | [**List[IntegrationInfo]**](IntegrationInfo.md) |  | 

## Example

```python
from opencode_sdk.models.v2_integration_list200_response import V2IntegrationList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of V2IntegrationList200Response from a JSON string
v2_integration_list200_response_instance = V2IntegrationList200Response.from_json(json)
# print the JSON string representation of the object
print(V2IntegrationList200Response.to_json())

# convert the object into a dict
v2_integration_list200_response_dict = v2_integration_list200_response_instance.to_dict()
# create an instance of V2IntegrationList200Response from a dict
v2_integration_list200_response_from_dict = V2IntegrationList200Response.from_dict(v2_integration_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



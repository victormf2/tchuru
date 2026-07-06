# GlobalHealth200Response

Health information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**healthy** | **bool** |  | 
**version** | **str** |  | 

## Example

```python
from opencode_sdk.models.global_health200_response import GlobalHealth200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GlobalHealth200Response from a JSON string
global_health200_response_instance = GlobalHealth200Response.from_json(json)
# print the JSON string representation of the object
print(GlobalHealth200Response.to_json())

# convert the object into a dict
global_health200_response_dict = global_health200_response_instance.to_dict()
# create an instance of GlobalHealth200Response from a dict
global_health200_response_from_dict = GlobalHealth200Response.from_dict(global_health200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



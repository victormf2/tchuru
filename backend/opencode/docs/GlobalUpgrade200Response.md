# GlobalUpgrade200Response

Upgrade result

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | 
**version** | **str** |  | 
**error** | **str** |  | 

## Example

```python
from opencode_sdk.models.global_upgrade200_response import GlobalUpgrade200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GlobalUpgrade200Response from a JSON string
global_upgrade200_response_instance = GlobalUpgrade200Response.from_json(json)
# print the JSON string representation of the object
print(GlobalUpgrade200Response.to_json())

# convert the object into a dict
global_upgrade200_response_dict = global_upgrade200_response_instance.to_dict()
# create an instance of GlobalUpgrade200Response from a dict
global_upgrade200_response_from_dict = GlobalUpgrade200Response.from_dict(global_upgrade200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# WellKnownAuth


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**key** | **str** |  | 
**token** | **str** |  | 

## Example

```python
from opencode_sdk.models.well_known_auth import WellKnownAuth

# TODO update the JSON string below
json = "{}"
# create an instance of WellKnownAuth from a JSON string
well_known_auth_instance = WellKnownAuth.from_json(json)
# print the JSON string representation of the object
print(WellKnownAuth.to_json())

# convert the object into a dict
well_known_auth_dict = well_known_auth_instance.to_dict()
# create an instance of WellKnownAuth from a dict
well_known_auth_from_dict = WellKnownAuth.from_dict(well_known_auth_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



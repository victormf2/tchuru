# LocationRef


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**directory** | **str** |  | 
**workspace_id** | **str** |  | [optional] 

## Example

```python
from opencode_sdk.models.location_ref import LocationRef

# TODO update the JSON string below
json = "{}"
# create an instance of LocationRef from a JSON string
location_ref_instance = LocationRef.from_json(json)
# print the JSON string representation of the object
print(LocationRef.to_json())

# convert the object into a dict
location_ref_dict = location_ref_instance.to_dict()
# create an instance of LocationRef from a dict
location_ref_from_dict = LocationRef.from_dict(location_ref_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ReferenceInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**path** | **str** |  | 
**description** | **str** |  | [optional] 
**hidden** | **bool** |  | [optional] 
**source** | [**ReferenceSource**](ReferenceSource.md) |  | 

## Example

```python
from opencode_sdk.models.reference_info import ReferenceInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ReferenceInfo from a JSON string
reference_info_instance = ReferenceInfo.from_json(json)
# print the JSON string representation of the object
print(ReferenceInfo.to_json())

# convert the object into a dict
reference_info_dict = reference_info_instance.to_dict()
# create an instance of ReferenceInfo from a dict
reference_info_from_dict = ReferenceInfo.from_dict(reference_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



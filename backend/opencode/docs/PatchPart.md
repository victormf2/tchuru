# PatchPart


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**session_id** | **str** |  | 
**message_id** | **str** |  | 
**type** | **str** |  | 
**hash** | **str** |  | 
**files** | **List[str]** |  | 

## Example

```python
from opencode_sdk.models.patch_part import PatchPart

# TODO update the JSON string below
json = "{}"
# create an instance of PatchPart from a JSON string
patch_part_instance = PatchPart.from_json(json)
# print the JSON string representation of the object
print(PatchPart.to_json())

# convert the object into a dict
patch_part_dict = patch_part_instance.to_dict()
# create an instance of PatchPart from a dict
patch_part_from_dict = PatchPart.from_dict(patch_part_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



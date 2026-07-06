# FilePart


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**session_id** | **str** |  | 
**message_id** | **str** |  | 
**type** | **str** |  | 
**mime** | **str** |  | 
**filename** | **str** |  | [optional] 
**url** | **str** |  | 
**source** | [**FilePartSource**](FilePartSource.md) |  | [optional] 

## Example

```python
from opencode_sdk.models.file_part import FilePart

# TODO update the JSON string below
json = "{}"
# create an instance of FilePart from a JSON string
file_part_instance = FilePart.from_json(json)
# print the JSON string representation of the object
print(FilePart.to_json())

# convert the object into a dict
file_part_dict = file_part_instance.to_dict()
# create an instance of FilePart from a dict
file_part_from_dict = FilePart.from_dict(file_part_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



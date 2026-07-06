# FilePartInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**type** | **str** |  | 
**mime** | **str** |  | 
**filename** | **str** |  | [optional] 
**url** | **str** |  | 
**source** | [**FilePartSource**](FilePartSource.md) |  | [optional] 

## Example

```python
from opencode_sdk.models.file_part_input import FilePartInput

# TODO update the JSON string below
json = "{}"
# create an instance of FilePartInput from a JSON string
file_part_input_instance = FilePartInput.from_json(json)
# print the JSON string representation of the object
print(FilePartInput.to_json())

# convert the object into a dict
file_part_input_dict = file_part_input_instance.to_dict()
# create an instance of FilePartInput from a dict
file_part_input_from_dict = FilePartInput.from_dict(file_part_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# TextPartInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**type** | **str** |  | 
**text** | **str** |  | 
**synthetic** | **bool** |  | [optional] 
**ignored** | **bool** |  | [optional] 
**time** | [**TextPartTime**](TextPartTime.md) |  | [optional] 
**metadata** | **object** |  | [optional] 

## Example

```python
from opencode_sdk.models.text_part_input import TextPartInput

# TODO update the JSON string below
json = "{}"
# create an instance of TextPartInput from a JSON string
text_part_input_instance = TextPartInput.from_json(json)
# print the JSON string representation of the object
print(TextPartInput.to_json())

# convert the object into a dict
text_part_input_dict = text_part_input_instance.to_dict()
# create an instance of TextPartInput from a dict
text_part_input_from_dict = TextPartInput.from_dict(text_part_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



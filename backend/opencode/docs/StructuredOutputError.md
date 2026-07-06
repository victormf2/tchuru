# StructuredOutputError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**data** | [**StructuredOutputErrorData**](StructuredOutputErrorData.md) |  | 

## Example

```python
from opencode_sdk.models.structured_output_error import StructuredOutputError

# TODO update the JSON string below
json = "{}"
# create an instance of StructuredOutputError from a JSON string
structured_output_error_instance = StructuredOutputError.from_json(json)
# print the JSON string representation of the object
print(StructuredOutputError.to_json())

# convert the object into a dict
structured_output_error_dict = structured_output_error_instance.to_dict()
# create an instance of StructuredOutputError from a dict
structured_output_error_from_dict = StructuredOutputError.from_dict(structured_output_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



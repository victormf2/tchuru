# StructuredOutputErrorData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  | 
**retries** | **int** |  | 

## Example

```python
from opencode_sdk.models.structured_output_error_data import StructuredOutputErrorData

# TODO update the JSON string below
json = "{}"
# create an instance of StructuredOutputErrorData from a JSON string
structured_output_error_data_instance = StructuredOutputErrorData.from_json(json)
# print the JSON string representation of the object
print(StructuredOutputErrorData.to_json())

# convert the object into a dict
structured_output_error_data_dict = structured_output_error_data_instance.to_dict()
# create an instance of StructuredOutputErrorData from a dict
structured_output_error_data_from_dict = StructuredOutputErrorData.from_dict(structured_output_error_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



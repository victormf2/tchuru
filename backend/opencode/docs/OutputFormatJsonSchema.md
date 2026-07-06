# OutputFormatJsonSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**var_schema** | **object** |  | 
**retry_count** | **int** |  | [optional] 

## Example

```python
from opencode_sdk.models.output_format_json_schema import OutputFormatJsonSchema

# TODO update the JSON string below
json = "{}"
# create an instance of OutputFormatJsonSchema from a JSON string
output_format_json_schema_instance = OutputFormatJsonSchema.from_json(json)
# print the JSON string representation of the object
print(OutputFormatJsonSchema.to_json())

# convert the object into a dict
output_format_json_schema_dict = output_format_json_schema_instance.to_dict()
# create an instance of OutputFormatJsonSchema from a dict
output_format_json_schema_from_dict = OutputFormatJsonSchema.from_dict(output_format_json_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



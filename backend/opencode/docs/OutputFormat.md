# OutputFormat


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**var_schema** | **object** |  | 
**retry_count** | **int** |  | [optional] 

## Example

```python
from opencode_sdk.models.output_format import OutputFormat

# TODO update the JSON string below
json = "{}"
# create an instance of OutputFormat from a JSON string
output_format_instance = OutputFormat.from_json(json)
# print the JSON string representation of the object
print(OutputFormat.to_json())

# convert the object into a dict
output_format_dict = output_format_instance.to_dict()
# create an instance of OutputFormat from a dict
output_format_from_dict = OutputFormat.from_dict(output_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



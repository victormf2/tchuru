# FormatterStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**extensions** | **List[str]** |  | 
**enabled** | **bool** |  | 

## Example

```python
from opencode_sdk.models.formatter_status import FormatterStatus

# TODO update the JSON string below
json = "{}"
# create an instance of FormatterStatus from a JSON string
formatter_status_instance = FormatterStatus.from_json(json)
# print the JSON string representation of the object
print(FormatterStatus.to_json())

# convert the object into a dict
formatter_status_dict = formatter_status_instance.to_dict()
# create an instance of FormatterStatus from a dict
formatter_status_from_dict = FormatterStatus.from_dict(formatter_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ContentFilterError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**data** | [**MoveSessionErrorData**](MoveSessionErrorData.md) |  | 

## Example

```python
from opencode_sdk.models.content_filter_error import ContentFilterError

# TODO update the JSON string below
json = "{}"
# create an instance of ContentFilterError from a JSON string
content_filter_error_instance = ContentFilterError.from_json(json)
# print the JSON string representation of the object
print(ContentFilterError.to_json())

# convert the object into a dict
content_filter_error_dict = content_filter_error_instance.to_dict()
# create an instance of ContentFilterError from a dict
content_filter_error_from_dict = ContentFilterError.from_dict(content_filter_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



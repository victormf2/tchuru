# UnknownError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**data** | [**UnknownErrorData**](UnknownErrorData.md) |  | 

## Example

```python
from opencode_sdk.models.unknown_error import UnknownError

# TODO update the JSON string below
json = "{}"
# create an instance of UnknownError from a JSON string
unknown_error_instance = UnknownError.from_json(json)
# print the JSON string representation of the object
print(UnknownError.to_json())

# convert the object into a dict
unknown_error_dict = unknown_error_instance.to_dict()
# create an instance of UnknownError from a dict
unknown_error_from_dict = UnknownError.from_dict(unknown_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



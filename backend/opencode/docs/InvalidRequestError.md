# InvalidRequestError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tag** | **str** |  | 
**message** | **str** |  | 
**kind** | **str** |  | [optional] 
**var_field** | **str** |  | [optional] 

## Example

```python
from opencode_sdk.models.invalid_request_error import InvalidRequestError

# TODO update the JSON string below
json = "{}"
# create an instance of InvalidRequestError from a JSON string
invalid_request_error_instance = InvalidRequestError.from_json(json)
# print the JSON string representation of the object
print(InvalidRequestError.to_json())

# convert the object into a dict
invalid_request_error_dict = invalid_request_error_instance.to_dict()
# create an instance of InvalidRequestError from a dict
invalid_request_error_from_dict = InvalidRequestError.from_dict(invalid_request_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



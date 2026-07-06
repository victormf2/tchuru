# BadRequestErrorData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  | 
**kind** | **str** |  | [optional] 

## Example

```python
from opencode_sdk.models.bad_request_error_data import BadRequestErrorData

# TODO update the JSON string below
json = "{}"
# create an instance of BadRequestErrorData from a JSON string
bad_request_error_data_instance = BadRequestErrorData.from_json(json)
# print the JSON string representation of the object
print(BadRequestErrorData.to_json())

# convert the object into a dict
bad_request_error_data_dict = bad_request_error_data_instance.to_dict()
# create an instance of BadRequestErrorData from a dict
bad_request_error_data_from_dict = BadRequestErrorData.from_dict(bad_request_error_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



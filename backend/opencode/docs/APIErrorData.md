# APIErrorData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  | 
**status_code** | **int** |  | [optional] 
**is_retryable** | **bool** |  | 
**response_headers** | **Dict[str, str]** |  | [optional] 
**response_body** | **str** |  | [optional] 
**metadata** | **Dict[str, str]** |  | [optional] 

## Example

```python
from opencode_sdk.models.api_error_data import APIErrorData

# TODO update the JSON string below
json = "{}"
# create an instance of APIErrorData from a JSON string
api_error_data_instance = APIErrorData.from_json(json)
# print the JSON string representation of the object
print(APIErrorData.to_json())

# convert the object into a dict
api_error_data_dict = api_error_data_instance.to_dict()
# create an instance of APIErrorData from a dict
api_error_data_from_dict = APIErrorData.from_dict(api_error_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



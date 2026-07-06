# SessionNextRetryError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  | 
**status_code** | **float** |  | [optional] 
**is_retryable** | **bool** |  | 
**response_headers** | **Dict[str, str]** |  | [optional] 
**response_body** | **str** |  | [optional] 
**metadata** | **Dict[str, str]** |  | [optional] 

## Example

```python
from opencode_sdk.models.session_next_retry_error import SessionNextRetryError

# TODO update the JSON string below
json = "{}"
# create an instance of SessionNextRetryError from a JSON string
session_next_retry_error_instance = SessionNextRetryError.from_json(json)
# print the JSON string representation of the object
print(SessionNextRetryError.to_json())

# convert the object into a dict
session_next_retry_error_dict = session_next_retry_error_instance.to_dict()
# create an instance of SessionNextRetryError from a dict
session_next_retry_error_from_dict = SessionNextRetryError.from_dict(session_next_retry_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



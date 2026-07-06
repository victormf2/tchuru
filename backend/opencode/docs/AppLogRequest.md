# AppLogRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service** | **str** | Service name for the log entry | 
**level** | **str** | Log level | 
**message** | **str** | Log message | 
**extra** | **object** |  | [optional] 

## Example

```python
from opencode_sdk.models.app_log_request import AppLogRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AppLogRequest from a JSON string
app_log_request_instance = AppLogRequest.from_json(json)
# print the JSON string representation of the object
print(AppLogRequest.to_json())

# convert the object into a dict
app_log_request_dict = app_log_request_instance.to_dict()
# create an instance of AppLogRequest from a dict
app_log_request_from_dict = AppLogRequest.from_dict(app_log_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



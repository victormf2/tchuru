# SessionSummarizeRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provider_id** | **str** |  | 
**model_id** | **str** |  | 
**auto** | **bool** |  | [optional] 

## Example

```python
from opencode_sdk.models.session_summarize_request import SessionSummarizeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SessionSummarizeRequest from a JSON string
session_summarize_request_instance = SessionSummarizeRequest.from_json(json)
# print the JSON string representation of the object
print(SessionSummarizeRequest.to_json())

# convert the object into a dict
session_summarize_request_dict = session_summarize_request_instance.to_dict()
# create an instance of SessionSummarizeRequest from a dict
session_summarize_request_from_dict = SessionSummarizeRequest.from_dict(session_summarize_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



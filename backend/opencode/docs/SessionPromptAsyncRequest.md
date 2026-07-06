# SessionPromptAsyncRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message_id** | **str** |  | [optional] 
**model** | [**SessionPromptAsyncRequestModel**](SessionPromptAsyncRequestModel.md) |  | [optional] 
**agent** | **str** |  | [optional] 
**no_reply** | **bool** |  | [optional] 
**tools** | **Dict[str, bool]** |  | [optional] 
**format** | [**OutputFormat**](OutputFormat.md) |  | [optional] 
**system** | **str** |  | [optional] 
**variant** | **str** |  | [optional] 
**parts** | [**List[SessionPromptRequestPartsInner]**](SessionPromptRequestPartsInner.md) |  | 

## Example

```python
from opencode_sdk.models.session_prompt_async_request import SessionPromptAsyncRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SessionPromptAsyncRequest from a JSON string
session_prompt_async_request_instance = SessionPromptAsyncRequest.from_json(json)
# print the JSON string representation of the object
print(SessionPromptAsyncRequest.to_json())

# convert the object into a dict
session_prompt_async_request_dict = session_prompt_async_request_instance.to_dict()
# create an instance of SessionPromptAsyncRequest from a dict
session_prompt_async_request_from_dict = SessionPromptAsyncRequest.from_dict(session_prompt_async_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# SessionPromptAsyncRequestModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provider_id** | **str** |  | 
**model_id** | **str** |  | 

## Example

```python
from opencode_sdk.models.session_prompt_async_request_model import SessionPromptAsyncRequestModel

# TODO update the JSON string below
json = "{}"
# create an instance of SessionPromptAsyncRequestModel from a JSON string
session_prompt_async_request_model_instance = SessionPromptAsyncRequestModel.from_json(json)
# print the JSON string representation of the object
print(SessionPromptAsyncRequestModel.to_json())

# convert the object into a dict
session_prompt_async_request_model_dict = session_prompt_async_request_model_instance.to_dict()
# create an instance of SessionPromptAsyncRequestModel from a dict
session_prompt_async_request_model_from_dict = SessionPromptAsyncRequestModel.from_dict(session_prompt_async_request_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



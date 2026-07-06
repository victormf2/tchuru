# SessionPromptRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message_id** | **str** |  | [optional] 
**model** | [**SessionPromptRequestModel**](SessionPromptRequestModel.md) |  | [optional] 
**agent** | **str** |  | [optional] 
**no_reply** | **bool** |  | [optional] 
**tools** | **Dict[str, bool]** |  | [optional] 
**format** | [**OutputFormat**](OutputFormat.md) |  | [optional] 
**system** | **str** |  | [optional] 
**variant** | **str** |  | [optional] 
**parts** | [**List[SessionPromptRequestPartsInner]**](SessionPromptRequestPartsInner.md) |  | 

## Example

```python
from opencode_sdk.models.session_prompt_request import SessionPromptRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SessionPromptRequest from a JSON string
session_prompt_request_instance = SessionPromptRequest.from_json(json)
# print the JSON string representation of the object
print(SessionPromptRequest.to_json())

# convert the object into a dict
session_prompt_request_dict = session_prompt_request_instance.to_dict()
# create an instance of SessionPromptRequest from a dict
session_prompt_request_from_dict = SessionPromptRequest.from_dict(session_prompt_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



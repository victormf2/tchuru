# SessionPromptRequestPartsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**type** | **str** |  | 
**text** | **str** |  | 
**synthetic** | **bool** |  | [optional] 
**ignored** | **bool** |  | [optional] 
**time** | [**TextPartTime**](TextPartTime.md) |  | [optional] 
**metadata** | **object** |  | [optional] 
**mime** | **str** |  | 
**filename** | **str** |  | [optional] 
**url** | **str** |  | 
**source** | [**AgentPartSource**](AgentPartSource.md) |  | [optional] 
**name** | **str** |  | 
**prompt** | **str** |  | 
**description** | **str** |  | 
**agent** | **str** |  | 
**model** | [**SessionPromptAsyncRequestModel**](SessionPromptAsyncRequestModel.md) |  | [optional] 
**command** | **str** |  | [optional] 

## Example

```python
from opencode_sdk.models.session_prompt_request_parts_inner import SessionPromptRequestPartsInner

# TODO update the JSON string below
json = "{}"
# create an instance of SessionPromptRequestPartsInner from a JSON string
session_prompt_request_parts_inner_instance = SessionPromptRequestPartsInner.from_json(json)
# print the JSON string representation of the object
print(SessionPromptRequestPartsInner.to_json())

# convert the object into a dict
session_prompt_request_parts_inner_dict = session_prompt_request_parts_inner_instance.to_dict()
# create an instance of SessionPromptRequestPartsInner from a dict
session_prompt_request_parts_inner_from_dict = SessionPromptRequestPartsInner.from_dict(session_prompt_request_parts_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



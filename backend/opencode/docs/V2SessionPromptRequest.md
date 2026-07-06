# V2SessionPromptRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**prompt** | [**PromptInput**](PromptInput.md) |  | 
**delivery** | **str** |  | [optional] 
**resume** | **bool** |  | [optional] 

## Example

```python
from opencode_sdk.models.v2_session_prompt_request import V2SessionPromptRequest

# TODO update the JSON string below
json = "{}"
# create an instance of V2SessionPromptRequest from a JSON string
v2_session_prompt_request_instance = V2SessionPromptRequest.from_json(json)
# print the JSON string representation of the object
print(V2SessionPromptRequest.to_json())

# convert the object into a dict
v2_session_prompt_request_dict = v2_session_prompt_request_instance.to_dict()
# create an instance of V2SessionPromptRequest from a dict
v2_session_prompt_request_from_dict = V2SessionPromptRequest.from_dict(v2_session_prompt_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



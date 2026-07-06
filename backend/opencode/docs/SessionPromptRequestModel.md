# SessionPromptRequestModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model_id** | **str** |  | 
**provider_id** | **str** |  | 

## Example

```python
from opencode_sdk.models.session_prompt_request_model import SessionPromptRequestModel

# TODO update the JSON string below
json = "{}"
# create an instance of SessionPromptRequestModel from a JSON string
session_prompt_request_model_instance = SessionPromptRequestModel.from_json(json)
# print the JSON string representation of the object
print(SessionPromptRequestModel.to_json())

# convert the object into a dict
session_prompt_request_model_dict = session_prompt_request_model_instance.to_dict()
# create an instance of SessionPromptRequestModel from a dict
session_prompt_request_model_from_dict = SessionPromptRequestModel.from_dict(session_prompt_request_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



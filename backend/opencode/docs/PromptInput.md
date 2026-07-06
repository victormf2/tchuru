# PromptInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | **str** |  | 
**files** | [**List[PromptInputFileAttachment]**](PromptInputFileAttachment.md) |  | [optional] 
**agents** | [**List[PromptAgentAttachment]**](PromptAgentAttachment.md) |  | [optional] 

## Example

```python
from opencode_sdk.models.prompt_input import PromptInput

# TODO update the JSON string below
json = "{}"
# create an instance of PromptInput from a JSON string
prompt_input_instance = PromptInput.from_json(json)
# print the JSON string representation of the object
print(PromptInput.to_json())

# convert the object into a dict
prompt_input_dict = prompt_input_instance.to_dict()
# create an instance of PromptInput from a dict
prompt_input_from_dict = PromptInput.from_dict(prompt_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



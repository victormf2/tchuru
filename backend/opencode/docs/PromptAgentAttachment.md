# PromptAgentAttachment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**source** | [**PromptSource**](PromptSource.md) |  | [optional] 

## Example

```python
from opencode_sdk.models.prompt_agent_attachment import PromptAgentAttachment

# TODO update the JSON string below
json = "{}"
# create an instance of PromptAgentAttachment from a JSON string
prompt_agent_attachment_instance = PromptAgentAttachment.from_json(json)
# print the JSON string representation of the object
print(PromptAgentAttachment.to_json())

# convert the object into a dict
prompt_agent_attachment_dict = prompt_agent_attachment_instance.to_dict()
# create an instance of PromptAgentAttachment from a dict
prompt_agent_attachment_from_dict = PromptAgentAttachment.from_dict(prompt_agent_attachment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



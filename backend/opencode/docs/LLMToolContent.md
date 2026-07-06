# LLMToolContent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**text** | **str** |  | 
**uri** | **str** |  | 
**mime** | **str** |  | 
**name** | **str** |  | [optional] 

## Example

```python
from opencode_sdk.models.llm_tool_content import LLMToolContent

# TODO update the JSON string below
json = "{}"
# create an instance of LLMToolContent from a JSON string
llm_tool_content_instance = LLMToolContent.from_json(json)
# print the JSON string representation of the object
print(LLMToolContent.to_json())

# convert the object into a dict
llm_tool_content_dict = llm_tool_content_instance.to_dict()
# create an instance of LLMToolContent from a dict
llm_tool_content_from_dict = LLMToolContent.from_dict(llm_tool_content_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



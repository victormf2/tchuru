# PromptFileAttachment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uri** | **str** |  | 
**mime** | **str** |  | 
**name** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**source** | [**PromptSource**](PromptSource.md) |  | [optional] 

## Example

```python
from opencode_sdk.models.prompt_file_attachment import PromptFileAttachment

# TODO update the JSON string below
json = "{}"
# create an instance of PromptFileAttachment from a JSON string
prompt_file_attachment_instance = PromptFileAttachment.from_json(json)
# print the JSON string representation of the object
print(PromptFileAttachment.to_json())

# convert the object into a dict
prompt_file_attachment_dict = prompt_file_attachment_instance.to_dict()
# create an instance of PromptFileAttachment from a dict
prompt_file_attachment_from_dict = PromptFileAttachment.from_dict(prompt_file_attachment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



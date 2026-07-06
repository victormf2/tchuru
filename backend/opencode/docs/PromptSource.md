# PromptSource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start** | **float** |  | 
**end** | **float** |  | 
**text** | **str** |  | 

## Example

```python
from opencode_sdk.models.prompt_source import PromptSource

# TODO update the JSON string below
json = "{}"
# create an instance of PromptSource from a JSON string
prompt_source_instance = PromptSource.from_json(json)
# print the JSON string representation of the object
print(PromptSource.to_json())

# convert the object into a dict
prompt_source_dict = prompt_source_instance.to_dict()
# create an instance of PromptSource from a dict
prompt_source_from_dict = PromptSource.from_dict(prompt_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



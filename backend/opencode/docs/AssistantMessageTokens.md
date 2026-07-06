# AssistantMessageTokens


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **float** |  | [optional] 
**input** | **float** |  | 
**output** | **float** |  | 
**reasoning** | **float** |  | 
**cache** | [**SessionTokensCache**](SessionTokensCache.md) |  | 

## Example

```python
from opencode_sdk.models.assistant_message_tokens import AssistantMessageTokens

# TODO update the JSON string below
json = "{}"
# create an instance of AssistantMessageTokens from a JSON string
assistant_message_tokens_instance = AssistantMessageTokens.from_json(json)
# print the JSON string representation of the object
print(AssistantMessageTokens.to_json())

# convert the object into a dict
assistant_message_tokens_dict = assistant_message_tokens_instance.to_dict()
# create an instance of AssistantMessageTokens from a dict
assistant_message_tokens_from_dict = AssistantMessageTokens.from_dict(assistant_message_tokens_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



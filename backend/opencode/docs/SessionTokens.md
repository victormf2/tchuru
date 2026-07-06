# SessionTokens


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input** | **float** |  | 
**output** | **float** |  | 
**reasoning** | **float** |  | 
**cache** | [**SessionTokensCache**](SessionTokensCache.md) |  | 

## Example

```python
from opencode_sdk.models.session_tokens import SessionTokens

# TODO update the JSON string below
json = "{}"
# create an instance of SessionTokens from a JSON string
session_tokens_instance = SessionTokens.from_json(json)
# print the JSON string representation of the object
print(SessionTokens.to_json())

# convert the object into a dict
session_tokens_dict = session_tokens_instance.to_dict()
# create an instance of SessionTokens from a dict
session_tokens_from_dict = SessionTokens.from_dict(session_tokens_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



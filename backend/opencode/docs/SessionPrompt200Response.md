# SessionPrompt200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**info** | [**AssistantMessage**](AssistantMessage.md) |  | 
**parts** | [**List[Part]**](Part.md) |  | 

## Example

```python
from opencode_sdk.models.session_prompt200_response import SessionPrompt200Response

# TODO update the JSON string below
json = "{}"
# create an instance of SessionPrompt200Response from a JSON string
session_prompt200_response_instance = SessionPrompt200Response.from_json(json)
# print the JSON string representation of the object
print(SessionPrompt200Response.to_json())

# convert the object into a dict
session_prompt200_response_dict = session_prompt200_response_instance.to_dict()
# create an instance of SessionPrompt200Response from a dict
session_prompt200_response_from_dict = SessionPrompt200Response.from_dict(session_prompt200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# SessionShell200Response

Created message

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**info** | [**Message**](Message.md) |  | 
**parts** | [**List[Part]**](Part.md) |  | 

## Example

```python
from opencode_sdk.models.session_shell200_response import SessionShell200Response

# TODO update the JSON string below
json = "{}"
# create an instance of SessionShell200Response from a JSON string
session_shell200_response_instance = SessionShell200Response.from_json(json)
# print the JSON string representation of the object
print(SessionShell200Response.to_json())

# convert the object into a dict
session_shell200_response_dict = session_shell200_response_instance.to_dict()
# create an instance of SessionShell200Response from a dict
session_shell200_response_from_dict = SessionShell200Response.from_dict(session_shell200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



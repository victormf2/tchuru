# SessionShellRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message_id** | **str** |  | [optional] 
**agent** | **str** |  | 
**model** | [**SessionPromptAsyncRequestModel**](SessionPromptAsyncRequestModel.md) |  | [optional] 
**command** | **str** |  | 

## Example

```python
from opencode_sdk.models.session_shell_request import SessionShellRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SessionShellRequest from a JSON string
session_shell_request_instance = SessionShellRequest.from_json(json)
# print the JSON string representation of the object
print(SessionShellRequest.to_json())

# convert the object into a dict
session_shell_request_dict = session_shell_request_instance.to_dict()
# create an instance of SessionShellRequest from a dict
session_shell_request_from_dict = SessionShellRequest.from_dict(session_shell_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



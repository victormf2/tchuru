# SessionCommandRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message_id** | **str** |  | [optional] 
**agent** | **str** |  | [optional] 
**model** | **str** |  | [optional] 
**arguments** | **str** |  | 
**command** | **str** |  | 
**variant** | **str** |  | [optional] 
**parts** | [**List[SessionCommandRequestPartsInner]**](SessionCommandRequestPartsInner.md) |  | [optional] 

## Example

```python
from opencode_sdk.models.session_command_request import SessionCommandRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SessionCommandRequest from a JSON string
session_command_request_instance = SessionCommandRequest.from_json(json)
# print the JSON string representation of the object
print(SessionCommandRequest.to_json())

# convert the object into a dict
session_command_request_dict = session_command_request_instance.to_dict()
# create an instance of SessionCommandRequest from a dict
session_command_request_from_dict = SessionCommandRequest.from_dict(session_command_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



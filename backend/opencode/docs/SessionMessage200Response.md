# SessionMessage200Response

Message

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**info** | [**Message**](Message.md) |  | 
**parts** | [**List[Part]**](Part.md) |  | 

## Example

```python
from opencode_sdk.models.session_message200_response import SessionMessage200Response

# TODO update the JSON string below
json = "{}"
# create an instance of SessionMessage200Response from a JSON string
session_message200_response_instance = SessionMessage200Response.from_json(json)
# print the JSON string representation of the object
print(SessionMessage200Response.to_json())

# convert the object into a dict
session_message200_response_dict = session_message200_response_instance.to_dict()
# create an instance of SessionMessage200Response from a dict
session_message200_response_from_dict = SessionMessage200Response.from_dict(session_message200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# SessionMessages200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**info** | [**Message**](Message.md) |  | 
**parts** | [**List[Part]**](Part.md) |  | 

## Example

```python
from opencode_sdk.models.session_messages200_response_inner import SessionMessages200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of SessionMessages200ResponseInner from a JSON string
session_messages200_response_inner_instance = SessionMessages200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(SessionMessages200ResponseInner.to_json())

# convert the object into a dict
session_messages200_response_inner_dict = session_messages200_response_inner_instance.to_dict()
# create an instance of SessionMessages200ResponseInner from a dict
session_messages200_response_inner_from_dict = SessionMessages200ResponseInner.from_dict(session_messages200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



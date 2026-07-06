# SessionInitRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model_id** | **str** |  | 
**provider_id** | **str** |  | 
**message_id** | **str** |  | 

## Example

```python
from opencode_sdk.models.session_init_request import SessionInitRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SessionInitRequest from a JSON string
session_init_request_instance = SessionInitRequest.from_json(json)
# print the JSON string representation of the object
print(SessionInitRequest.to_json())

# convert the object into a dict
session_init_request_dict = session_init_request_instance.to_dict()
# create an instance of SessionInitRequest from a dict
session_init_request_from_dict = SessionInitRequest.from_dict(session_init_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



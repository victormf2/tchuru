# SessionCreateRequestModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**provider_id** | **str** |  | 
**variant** | **str** |  | [optional] 

## Example

```python
from opencode_sdk.models.session_create_request_model import SessionCreateRequestModel

# TODO update the JSON string below
json = "{}"
# create an instance of SessionCreateRequestModel from a JSON string
session_create_request_model_instance = SessionCreateRequestModel.from_json(json)
# print the JSON string representation of the object
print(SessionCreateRequestModel.to_json())

# convert the object into a dict
session_create_request_model_dict = session_create_request_model_instance.to_dict()
# create an instance of SessionCreateRequestModel from a dict
session_create_request_model_from_dict = SessionCreateRequestModel.from_dict(session_create_request_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# V2SessionCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**agent** | **str** |  | [optional] 
**model** | [**ModelRef**](ModelRef.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 

## Example

```python
from opencode_sdk.models.v2_session_create_request import V2SessionCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of V2SessionCreateRequest from a JSON string
v2_session_create_request_instance = V2SessionCreateRequest.from_json(json)
# print the JSON string representation of the object
print(V2SessionCreateRequest.to_json())

# convert the object into a dict
v2_session_create_request_dict = v2_session_create_request_instance.to_dict()
# create an instance of V2SessionCreateRequest from a dict
v2_session_create_request_from_dict = V2SessionCreateRequest.from_dict(v2_session_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



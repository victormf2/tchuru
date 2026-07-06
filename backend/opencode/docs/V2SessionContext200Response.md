# V2SessionContext200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[SessionMessage]**](SessionMessage.md) |  | 

## Example

```python
from opencode_sdk.models.v2_session_context200_response import V2SessionContext200Response

# TODO update the JSON string below
json = "{}"
# create an instance of V2SessionContext200Response from a JSON string
v2_session_context200_response_instance = V2SessionContext200Response.from_json(json)
# print the JSON string representation of the object
print(V2SessionContext200Response.to_json())

# convert the object into a dict
v2_session_context200_response_dict = v2_session_context200_response_instance.to_dict()
# create an instance of V2SessionContext200Response from a dict
v2_session_context200_response_from_dict = V2SessionContext200Response.from_dict(v2_session_context200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



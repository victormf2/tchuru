# V2SessionMessages400Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tag** | **str** |  | 
**message** | **str** |  | 
**kind** | **str** |  | [optional] 
**var_field** | **str** |  | [optional] 

## Example

```python
from opencode_sdk.models.v2_session_messages400_response import V2SessionMessages400Response

# TODO update the JSON string below
json = "{}"
# create an instance of V2SessionMessages400Response from a JSON string
v2_session_messages400_response_instance = V2SessionMessages400Response.from_json(json)
# print the JSON string representation of the object
print(V2SessionMessages400Response.to_json())

# convert the object into a dict
v2_session_messages400_response_dict = v2_session_messages400_response_instance.to_dict()
# create an instance of V2SessionMessages400Response from a dict
v2_session_messages400_response_from_dict = V2SessionMessages400Response.from_dict(v2_session_messages400_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



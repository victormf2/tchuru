# V2SessionList400Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tag** | **str** |  | 
**message** | **str** |  | 
**kind** | **str** |  | [optional] 
**var_field** | **str** |  | [optional] 

## Example

```python
from opencode_sdk.models.v2_session_list400_response import V2SessionList400Response

# TODO update the JSON string below
json = "{}"
# create an instance of V2SessionList400Response from a JSON string
v2_session_list400_response_instance = V2SessionList400Response.from_json(json)
# print the JSON string representation of the object
print(V2SessionList400Response.to_json())

# convert the object into a dict
v2_session_list400_response_dict = v2_session_list400_response_instance.to_dict()
# create an instance of V2SessionList400Response from a dict
v2_session_list400_response_from_dict = V2SessionList400Response.from_dict(v2_session_list400_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# V2SessionSwitchModelRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model** | [**ModelRef**](ModelRef.md) |  | 

## Example

```python
from opencode_sdk.models.v2_session_switch_model_request import V2SessionSwitchModelRequest

# TODO update the JSON string below
json = "{}"
# create an instance of V2SessionSwitchModelRequest from a JSON string
v2_session_switch_model_request_instance = V2SessionSwitchModelRequest.from_json(json)
# print the JSON string representation of the object
print(V2SessionSwitchModelRequest.to_json())

# convert the object into a dict
v2_session_switch_model_request_dict = v2_session_switch_model_request_instance.to_dict()
# create an instance of V2SessionSwitchModelRequest from a dict
v2_session_switch_model_request_from_dict = V2SessionSwitchModelRequest.from_dict(v2_session_switch_model_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



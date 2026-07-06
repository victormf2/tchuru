# V2SessionRevertStageRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message_id** | **str** |  | 
**files** | **bool** |  | [optional] 

## Example

```python
from opencode_sdk.models.v2_session_revert_stage_request import V2SessionRevertStageRequest

# TODO update the JSON string below
json = "{}"
# create an instance of V2SessionRevertStageRequest from a JSON string
v2_session_revert_stage_request_instance = V2SessionRevertStageRequest.from_json(json)
# print the JSON string representation of the object
print(V2SessionRevertStageRequest.to_json())

# convert the object into a dict
v2_session_revert_stage_request_dict = v2_session_revert_stage_request_instance.to_dict()
# create an instance of V2SessionRevertStageRequest from a dict
v2_session_revert_stage_request_from_dict = V2SessionRevertStageRequest.from_dict(v2_session_revert_stage_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# SessionV2Info


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**parent_id** | **str** |  | [optional] 
**project_id** | **str** |  | 
**agent** | **str** |  | [optional] 
**model** | [**ModelRef**](ModelRef.md) |  | [optional] 
**cost** | **float** |  | 
**tokens** | [**SessionTokens**](SessionTokens.md) |  | 
**time** | [**SessionV2InfoTime**](SessionV2InfoTime.md) |  | 
**title** | **str** |  | 
**location** | [**LocationRef**](LocationRef.md) |  | 
**subpath** | **str** |  | [optional] 
**revert** | [**RevertState**](RevertState.md) |  | [optional] 

## Example

```python
from opencode_sdk.models.session_v2_info import SessionV2Info

# TODO update the JSON string below
json = "{}"
# create an instance of SessionV2Info from a JSON string
session_v2_info_instance = SessionV2Info.from_json(json)
# print the JSON string representation of the object
print(SessionV2Info.to_json())

# convert the object into a dict
session_v2_info_dict = session_v2_info_instance.to_dict()
# create an instance of SessionV2Info from a dict
session_v2_info_from_dict = SessionV2Info.from_dict(session_v2_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# GlobalSession


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**slug** | **str** |  | 
**project_id** | **str** |  | 
**workspace_id** | **str** |  | [optional] 
**directory** | **str** |  | 
**path** | **str** |  | [optional] 
**parent_id** | **str** |  | [optional] 
**summary** | [**SessionSummary**](SessionSummary.md) |  | [optional] 
**cost** | **float** |  | [optional] 
**tokens** | [**SessionTokens**](SessionTokens.md) |  | [optional] 
**share** | [**SessionShare**](SessionShare.md) |  | [optional] 
**title** | **str** |  | 
**agent** | **str** |  | [optional] 
**model** | [**SessionCreateRequestModel**](SessionCreateRequestModel.md) |  | [optional] 
**version** | **str** |  | 
**metadata** | **object** |  | [optional] 
**time** | [**SessionTime**](SessionTime.md) |  | 
**permission** | [**List[PermissionRule]**](PermissionRule.md) |  | [optional] 
**revert** | [**SessionRevert**](SessionRevert.md) |  | [optional] 
**project** | [**ProjectSummary**](ProjectSummary.md) |  | 

## Example

```python
from opencode_sdk.models.global_session import GlobalSession

# TODO update the JSON string below
json = "{}"
# create an instance of GlobalSession from a JSON string
global_session_instance = GlobalSession.from_json(json)
# print the JSON string representation of the object
print(GlobalSession.to_json())

# convert the object into a dict
global_session_dict = global_session_instance.to_dict()
# create an instance of GlobalSession from a dict
global_session_from_dict = GlobalSession.from_dict(global_session_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# Session


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

## Example

```python
from opencode_sdk.models.session import Session

# TODO update the JSON string below
json = "{}"
# create an instance of Session from a JSON string
session_instance = Session.from_json(json)
# print the JSON string representation of the object
print(Session.to_json())

# convert the object into a dict
session_dict = session_instance.to_dict()
# create an instance of Session from a dict
session_from_dict = Session.from_dict(session_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



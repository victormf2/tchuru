# SessionCommandRequestPartsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**type** | **str** |  | 
**mime** | **str** |  | 
**filename** | **str** |  | [optional] 
**url** | **str** |  | 
**source** | [**FilePartSource**](FilePartSource.md) |  | [optional] 

## Example

```python
from opencode_sdk.models.session_command_request_parts_inner import SessionCommandRequestPartsInner

# TODO update the JSON string below
json = "{}"
# create an instance of SessionCommandRequestPartsInner from a JSON string
session_command_request_parts_inner_instance = SessionCommandRequestPartsInner.from_json(json)
# print the JSON string representation of the object
print(SessionCommandRequestPartsInner.to_json())

# convert the object into a dict
session_command_request_parts_inner_dict = session_command_request_parts_inner_instance.to_dict()
# create an instance of SessionCommandRequestPartsInner from a dict
session_command_request_parts_inner_from_dict = SessionCommandRequestPartsInner.from_dict(session_command_request_parts_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



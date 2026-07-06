# SessionRevertRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message_id** | **str** |  | 
**part_id** | **str** |  | [optional] 

## Example

```python
from opencode_sdk.models.session_revert_request import SessionRevertRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SessionRevertRequest from a JSON string
session_revert_request_instance = SessionRevertRequest.from_json(json)
# print the JSON string representation of the object
print(SessionRevertRequest.to_json())

# convert the object into a dict
session_revert_request_dict = session_revert_request_instance.to_dict()
# create an instance of SessionRevertRequest from a dict
session_revert_request_from_dict = SessionRevertRequest.from_dict(session_revert_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



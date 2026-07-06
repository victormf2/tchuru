# ExperimentalControlPlaneMoveSessionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**session_id** | **str** |  | 
**destination** | [**MoveSessionDestination**](MoveSessionDestination.md) |  | 
**move_changes** | **bool** |  | [optional] 

## Example

```python
from opencode_sdk.models.experimental_control_plane_move_session_request import ExperimentalControlPlaneMoveSessionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ExperimentalControlPlaneMoveSessionRequest from a JSON string
experimental_control_plane_move_session_request_instance = ExperimentalControlPlaneMoveSessionRequest.from_json(json)
# print the JSON string representation of the object
print(ExperimentalControlPlaneMoveSessionRequest.to_json())

# convert the object into a dict
experimental_control_plane_move_session_request_dict = experimental_control_plane_move_session_request_instance.to_dict()
# create an instance of ExperimentalControlPlaneMoveSessionRequest from a dict
experimental_control_plane_move_session_request_from_dict = ExperimentalControlPlaneMoveSessionRequest.from_dict(experimental_control_plane_move_session_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



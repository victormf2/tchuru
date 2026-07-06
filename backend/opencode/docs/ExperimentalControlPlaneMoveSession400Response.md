# ExperimentalControlPlaneMoveSession400Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**data** | [**MoveSessionErrorData**](MoveSessionErrorData.md) |  | 
**tag** | **str** |  | 
**message** | **str** |  | 
**kind** | **str** |  | [optional] 
**var_field** | **str** |  | [optional] 

## Example

```python
from opencode_sdk.models.experimental_control_plane_move_session400_response import ExperimentalControlPlaneMoveSession400Response

# TODO update the JSON string below
json = "{}"
# create an instance of ExperimentalControlPlaneMoveSession400Response from a JSON string
experimental_control_plane_move_session400_response_instance = ExperimentalControlPlaneMoveSession400Response.from_json(json)
# print the JSON string representation of the object
print(ExperimentalControlPlaneMoveSession400Response.to_json())

# convert the object into a dict
experimental_control_plane_move_session400_response_dict = experimental_control_plane_move_session400_response_instance.to_dict()
# create an instance of ExperimentalControlPlaneMoveSession400Response from a dict
experimental_control_plane_move_session400_response_from_dict = ExperimentalControlPlaneMoveSession400Response.from_dict(experimental_control_plane_move_session400_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



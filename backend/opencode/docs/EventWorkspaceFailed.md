# EventWorkspaceFailed


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**MoveSessionErrorData**](MoveSessionErrorData.md) |  | 

## Example

```python
from opencode_sdk.models.event_workspace_failed import EventWorkspaceFailed

# TODO update the JSON string below
json = "{}"
# create an instance of EventWorkspaceFailed from a JSON string
event_workspace_failed_instance = EventWorkspaceFailed.from_json(json)
# print the JSON string representation of the object
print(EventWorkspaceFailed.to_json())

# convert the object into a dict
event_workspace_failed_dict = event_workspace_failed_instance.to_dict()
# create an instance of EventWorkspaceFailed from a dict
event_workspace_failed_from_dict = EventWorkspaceFailed.from_dict(event_workspace_failed_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



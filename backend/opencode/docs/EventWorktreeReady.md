# EventWorktreeReady


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf84Properties**](GlobalEventPayloadAnyOf84Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_worktree_ready import EventWorktreeReady

# TODO update the JSON string below
json = "{}"
# create an instance of EventWorktreeReady from a JSON string
event_worktree_ready_instance = EventWorktreeReady.from_json(json)
# print the JSON string representation of the object
print(EventWorktreeReady.to_json())

# convert the object into a dict
event_worktree_ready_dict = event_worktree_ready_instance.to_dict()
# create an instance of EventWorktreeReady from a dict
event_worktree_ready_from_dict = EventWorktreeReady.from_dict(event_worktree_ready_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



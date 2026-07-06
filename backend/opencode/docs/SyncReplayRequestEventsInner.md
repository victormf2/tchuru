# SyncReplayRequestEventsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**aggregate_id** | **str** |  | 
**seq** | **int** |  | 
**type** | **str** |  | 
**data** | **object** |  | 

## Example

```python
from opencode_sdk.models.sync_replay_request_events_inner import SyncReplayRequestEventsInner

# TODO update the JSON string below
json = "{}"
# create an instance of SyncReplayRequestEventsInner from a JSON string
sync_replay_request_events_inner_instance = SyncReplayRequestEventsInner.from_json(json)
# print the JSON string representation of the object
print(SyncReplayRequestEventsInner.to_json())

# convert the object into a dict
sync_replay_request_events_inner_dict = sync_replay_request_events_inner_instance.to_dict()
# create an instance of SyncReplayRequestEventsInner from a dict
sync_replay_request_events_inner_from_dict = SyncReplayRequestEventsInner.from_dict(sync_replay_request_events_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



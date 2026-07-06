# SyncReplayRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**directory** | **str** |  | 
**events** | [**List[SyncReplayRequestEventsInner]**](SyncReplayRequestEventsInner.md) |  | 

## Example

```python
from opencode_sdk.models.sync_replay_request import SyncReplayRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SyncReplayRequest from a JSON string
sync_replay_request_instance = SyncReplayRequest.from_json(json)
# print the JSON string representation of the object
print(SyncReplayRequest.to_json())

# convert the object into a dict
sync_replay_request_dict = sync_replay_request_instance.to_dict()
# create an instance of SyncReplayRequest from a dict
sync_replay_request_from_dict = SyncReplayRequest.from_dict(sync_replay_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



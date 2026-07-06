# SyncEventSessionNextAgentSwitched


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**sync_event** | [**SyncEventSessionNextAgentSwitchedSyncEvent**](SyncEventSessionNextAgentSwitchedSyncEvent.md) |  | 

## Example

```python
from opencode_sdk.models.sync_event_session_next_agent_switched import SyncEventSessionNextAgentSwitched

# TODO update the JSON string below
json = "{}"
# create an instance of SyncEventSessionNextAgentSwitched from a JSON string
sync_event_session_next_agent_switched_instance = SyncEventSessionNextAgentSwitched.from_json(json)
# print the JSON string representation of the object
print(SyncEventSessionNextAgentSwitched.to_json())

# convert the object into a dict
sync_event_session_next_agent_switched_dict = sync_event_session_next_agent_switched_instance.to_dict()
# create an instance of SyncEventSessionNextAgentSwitched from a dict
sync_event_session_next_agent_switched_from_dict = SyncEventSessionNextAgentSwitched.from_dict(sync_event_session_next_agent_switched_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



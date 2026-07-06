# EventSessionIdle


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**SyncStealRequest**](SyncStealRequest.md) |  | 

## Example

```python
from opencode_sdk.models.event_session_idle import EventSessionIdle

# TODO update the JSON string below
json = "{}"
# create an instance of EventSessionIdle from a JSON string
event_session_idle_instance = EventSessionIdle.from_json(json)
# print the JSON string representation of the object
print(EventSessionIdle.to_json())

# convert the object into a dict
event_session_idle_dict = event_session_idle_instance.to_dict()
# create an instance of EventSessionIdle from a dict
event_session_idle_from_dict = EventSessionIdle.from_dict(event_session_idle_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



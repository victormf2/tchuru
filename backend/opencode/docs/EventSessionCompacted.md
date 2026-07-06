# EventSessionCompacted


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**SyncStealRequest**](SyncStealRequest.md) |  | 

## Example

```python
from opencode_sdk.models.event_session_compacted import EventSessionCompacted

# TODO update the JSON string below
json = "{}"
# create an instance of EventSessionCompacted from a JSON string
event_session_compacted_instance = EventSessionCompacted.from_json(json)
# print the JSON string representation of the object
print(EventSessionCompacted.to_json())

# convert the object into a dict
event_session_compacted_dict = event_session_compacted_instance.to_dict()
# create an instance of EventSessionCompacted from a dict
event_session_compacted_from_dict = EventSessionCompacted.from_dict(event_session_compacted_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



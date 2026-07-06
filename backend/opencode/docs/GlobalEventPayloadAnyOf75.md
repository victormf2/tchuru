# GlobalEventPayloadAnyOf75


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**SyncStealRequest**](SyncStealRequest.md) |  | 

## Example

```python
from opencode_sdk.models.global_event_payload_any_of75 import GlobalEventPayloadAnyOf75

# TODO update the JSON string below
json = "{}"
# create an instance of GlobalEventPayloadAnyOf75 from a JSON string
global_event_payload_any_of75_instance = GlobalEventPayloadAnyOf75.from_json(json)
# print the JSON string representation of the object
print(GlobalEventPayloadAnyOf75.to_json())

# convert the object into a dict
global_event_payload_any_of75_dict = global_event_payload_any_of75_instance.to_dict()
# create an instance of GlobalEventPayloadAnyOf75 from a dict
global_event_payload_any_of75_from_dict = GlobalEventPayloadAnyOf75.from_dict(global_event_payload_any_of75_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



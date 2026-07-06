# GlobalEventPayloadAnyOf36Properties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timestamp** | **float** |  | 
**session_id** | **str** |  | 
**attempt** | **float** |  | 
**error** | [**SessionNextRetryError**](SessionNextRetryError.md) |  | 

## Example

```python
from opencode_sdk.models.global_event_payload_any_of36_properties import GlobalEventPayloadAnyOf36Properties

# TODO update the JSON string below
json = "{}"
# create an instance of GlobalEventPayloadAnyOf36Properties from a JSON string
global_event_payload_any_of36_properties_instance = GlobalEventPayloadAnyOf36Properties.from_json(json)
# print the JSON string representation of the object
print(GlobalEventPayloadAnyOf36Properties.to_json())

# convert the object into a dict
global_event_payload_any_of36_properties_dict = global_event_payload_any_of36_properties_instance.to_dict()
# create an instance of GlobalEventPayloadAnyOf36Properties from a dict
global_event_payload_any_of36_properties_from_dict = GlobalEventPayloadAnyOf36Properties.from_dict(global_event_payload_any_of36_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



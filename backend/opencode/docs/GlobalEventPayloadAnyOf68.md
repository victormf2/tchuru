# GlobalEventPayloadAnyOf68


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**TuiShowToastRequest**](TuiShowToastRequest.md) |  | 

## Example

```python
from opencode_sdk.models.global_event_payload_any_of68 import GlobalEventPayloadAnyOf68

# TODO update the JSON string below
json = "{}"
# create an instance of GlobalEventPayloadAnyOf68 from a JSON string
global_event_payload_any_of68_instance = GlobalEventPayloadAnyOf68.from_json(json)
# print the JSON string representation of the object
print(GlobalEventPayloadAnyOf68.to_json())

# convert the object into a dict
global_event_payload_any_of68_dict = global_event_payload_any_of68_instance.to_dict()
# create an instance of GlobalEventPayloadAnyOf68 from a dict
global_event_payload_any_of68_from_dict = GlobalEventPayloadAnyOf68.from_dict(global_event_payload_any_of68_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



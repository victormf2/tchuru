# GlobalEventPayloadAnyOf64


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf64Properties**](GlobalEventPayloadAnyOf64Properties.md) |  | 

## Example

```python
from opencode_sdk.models.global_event_payload_any_of64 import GlobalEventPayloadAnyOf64

# TODO update the JSON string below
json = "{}"
# create an instance of GlobalEventPayloadAnyOf64 from a JSON string
global_event_payload_any_of64_instance = GlobalEventPayloadAnyOf64.from_json(json)
# print the JSON string representation of the object
print(GlobalEventPayloadAnyOf64.to_json())

# convert the object into a dict
global_event_payload_any_of64_dict = global_event_payload_any_of64_instance.to_dict()
# create an instance of GlobalEventPayloadAnyOf64 from a dict
global_event_payload_any_of64_from_dict = GlobalEventPayloadAnyOf64.from_dict(global_event_payload_any_of64_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



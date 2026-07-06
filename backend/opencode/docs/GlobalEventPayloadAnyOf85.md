# GlobalEventPayloadAnyOf85


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**MoveSessionErrorData**](MoveSessionErrorData.md) |  | 

## Example

```python
from opencode_sdk.models.global_event_payload_any_of85 import GlobalEventPayloadAnyOf85

# TODO update the JSON string below
json = "{}"
# create an instance of GlobalEventPayloadAnyOf85 from a JSON string
global_event_payload_any_of85_instance = GlobalEventPayloadAnyOf85.from_json(json)
# print the JSON string representation of the object
print(GlobalEventPayloadAnyOf85.to_json())

# convert the object into a dict
global_event_payload_any_of85_dict = global_event_payload_any_of85_instance.to_dict()
# create an instance of GlobalEventPayloadAnyOf85 from a dict
global_event_payload_any_of85_from_dict = GlobalEventPayloadAnyOf85.from_dict(global_event_payload_any_of85_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



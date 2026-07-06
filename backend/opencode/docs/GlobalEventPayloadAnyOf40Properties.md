# GlobalEventPayloadAnyOf40Properties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timestamp** | **float** |  | 
**session_id** | **str** |  | 
**revert** | [**RevertState**](RevertState.md) |  | 

## Example

```python
from opencode_sdk.models.global_event_payload_any_of40_properties import GlobalEventPayloadAnyOf40Properties

# TODO update the JSON string below
json = "{}"
# create an instance of GlobalEventPayloadAnyOf40Properties from a JSON string
global_event_payload_any_of40_properties_instance = GlobalEventPayloadAnyOf40Properties.from_json(json)
# print the JSON string representation of the object
print(GlobalEventPayloadAnyOf40Properties.to_json())

# convert the object into a dict
global_event_payload_any_of40_properties_dict = global_event_payload_any_of40_properties_instance.to_dict()
# create an instance of GlobalEventPayloadAnyOf40Properties from a dict
global_event_payload_any_of40_properties_from_dict = GlobalEventPayloadAnyOf40Properties.from_dict(global_event_payload_any_of40_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



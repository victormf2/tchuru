# EventSessionNextModelSwitched


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf12Properties**](GlobalEventPayloadAnyOf12Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_session_next_model_switched import EventSessionNextModelSwitched

# TODO update the JSON string below
json = "{}"
# create an instance of EventSessionNextModelSwitched from a JSON string
event_session_next_model_switched_instance = EventSessionNextModelSwitched.from_json(json)
# print the JSON string representation of the object
print(EventSessionNextModelSwitched.to_json())

# convert the object into a dict
event_session_next_model_switched_dict = event_session_next_model_switched_instance.to_dict()
# create an instance of EventSessionNextModelSwitched from a dict
event_session_next_model_switched_from_dict = EventSessionNextModelSwitched.from_dict(event_session_next_model_switched_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# GlobalEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**directory** | **str** |  | 
**project** | **str** |  | [optional] 
**workspace** | **str** |  | [optional] 
**payload** | [**GlobalEventPayload**](GlobalEventPayload.md) |  | 

## Example

```python
from opencode_sdk.models.global_event import GlobalEvent

# TODO update the JSON string below
json = "{}"
# create an instance of GlobalEvent from a JSON string
global_event_instance = GlobalEvent.from_json(json)
# print the JSON string representation of the object
print(GlobalEvent.to_json())

# convert the object into a dict
global_event_dict = global_event_instance.to_dict()
# create an instance of GlobalEvent from a dict
global_event_from_dict = GlobalEvent.from_dict(global_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



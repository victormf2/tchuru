# EventServerInstanceDisposed


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**EventServerInstanceDisposedProperties**](EventServerInstanceDisposedProperties.md) |  | 

## Example

```python
from opencode_sdk.models.event_server_instance_disposed import EventServerInstanceDisposed

# TODO update the JSON string below
json = "{}"
# create an instance of EventServerInstanceDisposed from a JSON string
event_server_instance_disposed_instance = EventServerInstanceDisposed.from_json(json)
# print the JSON string representation of the object
print(EventServerInstanceDisposed.to_json())

# convert the object into a dict
event_server_instance_disposed_dict = event_server_instance_disposed_instance.to_dict()
# create an instance of EventServerInstanceDisposed from a dict
event_server_instance_disposed_from_dict = EventServerInstanceDisposed.from_dict(event_server_instance_disposed_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



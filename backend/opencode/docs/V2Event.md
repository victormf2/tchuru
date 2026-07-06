# V2Event


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | **object** |  | 

## Example

```python
from opencode_sdk.models.v2_event import V2Event

# TODO update the JSON string below
json = "{}"
# create an instance of V2Event from a JSON string
v2_event_instance = V2Event.from_json(json)
# print the JSON string representation of the object
print(V2Event.to_json())

# convert the object into a dict
v2_event_dict = v2_event_instance.to_dict()
# create an instance of V2Event from a dict
v2_event_from_dict = V2Event.from_dict(v2_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



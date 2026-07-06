# EventReferenceUpdated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | **object** |  | 

## Example

```python
from opencode_sdk.models.event_reference_updated import EventReferenceUpdated

# TODO update the JSON string below
json = "{}"
# create an instance of EventReferenceUpdated from a JSON string
event_reference_updated_instance = EventReferenceUpdated.from_json(json)
# print the JSON string representation of the object
print(EventReferenceUpdated.to_json())

# convert the object into a dict
event_reference_updated_dict = event_reference_updated_instance.to_dict()
# create an instance of EventReferenceUpdated from a dict
event_reference_updated_from_dict = EventReferenceUpdated.from_dict(event_reference_updated_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



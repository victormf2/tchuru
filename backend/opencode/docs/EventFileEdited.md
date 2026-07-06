# EventFileEdited


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | [**GlobalEventPayloadAnyOf48Properties**](GlobalEventPayloadAnyOf48Properties.md) |  | 

## Example

```python
from opencode_sdk.models.event_file_edited import EventFileEdited

# TODO update the JSON string below
json = "{}"
# create an instance of EventFileEdited from a JSON string
event_file_edited_instance = EventFileEdited.from_json(json)
# print the JSON string representation of the object
print(EventFileEdited.to_json())

# convert the object into a dict
event_file_edited_dict = event_file_edited_instance.to_dict()
# create an instance of EventFileEdited from a dict
event_file_edited_from_dict = EventFileEdited.from_dict(event_file_edited_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



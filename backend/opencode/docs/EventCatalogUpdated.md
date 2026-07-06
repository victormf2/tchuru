# EventCatalogUpdated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**properties** | **object** |  | 

## Example

```python
from opencode_sdk.models.event_catalog_updated import EventCatalogUpdated

# TODO update the JSON string below
json = "{}"
# create an instance of EventCatalogUpdated from a JSON string
event_catalog_updated_instance = EventCatalogUpdated.from_json(json)
# print the JSON string representation of the object
print(EventCatalogUpdated.to_json())

# convert the object into a dict
event_catalog_updated_dict = event_catalog_updated_instance.to_dict()
# create an instance of EventCatalogUpdated from a dict
event_catalog_updated_from_dict = EventCatalogUpdated.from_dict(event_catalog_updated_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



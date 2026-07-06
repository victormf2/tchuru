# ResourceSource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | [**FilePartSourceText**](FilePartSourceText.md) |  | 
**type** | **str** |  | 
**client_name** | **str** |  | 
**uri** | **str** |  | 

## Example

```python
from opencode_sdk.models.resource_source import ResourceSource

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceSource from a JSON string
resource_source_instance = ResourceSource.from_json(json)
# print the JSON string representation of the object
print(ResourceSource.to_json())

# convert the object into a dict
resource_source_dict = resource_source_instance.to_dict()
# create an instance of ResourceSource from a dict
resource_source_from_dict = ResourceSource.from_dict(resource_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



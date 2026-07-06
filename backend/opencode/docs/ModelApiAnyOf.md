# ModelApiAnyOf


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**package** | **str** |  | 
**url** | **str** |  | [optional] 
**settings** | **object** |  | [optional] 

## Example

```python
from opencode_sdk.models.model_api_any_of import ModelApiAnyOf

# TODO update the JSON string below
json = "{}"
# create an instance of ModelApiAnyOf from a JSON string
model_api_any_of_instance = ModelApiAnyOf.from_json(json)
# print the JSON string representation of the object
print(ModelApiAnyOf.to_json())

# convert the object into a dict
model_api_any_of_dict = model_api_any_of_instance.to_dict()
# create an instance of ModelApiAnyOf from a dict
model_api_any_of_from_dict = ModelApiAnyOf.from_dict(model_api_any_of_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



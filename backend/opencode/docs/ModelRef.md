# ModelRef


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**provider_id** | **str** |  | 
**variant** | **str** |  | [optional] 

## Example

```python
from opencode_sdk.models.model_ref import ModelRef

# TODO update the JSON string below
json = "{}"
# create an instance of ModelRef from a JSON string
model_ref_instance = ModelRef.from_json(json)
# print the JSON string representation of the object
print(ModelRef.to_json())

# convert the object into a dict
model_ref_dict = model_ref_instance.to_dict()
# create an instance of ModelRef from a dict
model_ref_from_dict = ModelRef.from_dict(model_ref_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ModelCapabilitiesInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | **bool** |  | 
**audio** | **bool** |  | 
**image** | **bool** |  | 
**video** | **bool** |  | 
**pdf** | **bool** |  | 

## Example

```python
from opencode_sdk.models.model_capabilities_input import ModelCapabilitiesInput

# TODO update the JSON string below
json = "{}"
# create an instance of ModelCapabilitiesInput from a JSON string
model_capabilities_input_instance = ModelCapabilitiesInput.from_json(json)
# print the JSON string representation of the object
print(ModelCapabilitiesInput.to_json())

# convert the object into a dict
model_capabilities_input_dict = model_capabilities_input_instance.to_dict()
# create an instance of ModelCapabilitiesInput from a dict
model_capabilities_input_from_dict = ModelCapabilitiesInput.from_dict(model_capabilities_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



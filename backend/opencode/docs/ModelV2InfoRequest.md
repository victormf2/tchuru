# ModelV2InfoRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**headers** | **Dict[str, str]** |  | 
**body** | **object** |  | 
**variant** | **str** |  | [optional] 

## Example

```python
from opencode_sdk.models.model_v2_info_request import ModelV2InfoRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ModelV2InfoRequest from a JSON string
model_v2_info_request_instance = ModelV2InfoRequest.from_json(json)
# print the JSON string representation of the object
print(ModelV2InfoRequest.to_json())

# convert the object into a dict
model_v2_info_request_dict = model_v2_info_request_instance.to_dict()
# create an instance of ModelV2InfoRequest from a dict
model_v2_info_request_from_dict = ModelV2InfoRequest.from_dict(model_v2_info_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



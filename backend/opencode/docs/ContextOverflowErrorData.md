# ContextOverflowErrorData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  | 
**response_body** | **str** |  | [optional] 

## Example

```python
from opencode_sdk.models.context_overflow_error_data import ContextOverflowErrorData

# TODO update the JSON string below
json = "{}"
# create an instance of ContextOverflowErrorData from a JSON string
context_overflow_error_data_instance = ContextOverflowErrorData.from_json(json)
# print the JSON string representation of the object
print(ContextOverflowErrorData.to_json())

# convert the object into a dict
context_overflow_error_data_dict = context_overflow_error_data_instance.to_dict()
# create an instance of ContextOverflowErrorData from a dict
context_overflow_error_data_from_dict = ContextOverflowErrorData.from_dict(context_overflow_error_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



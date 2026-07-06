# ContextOverflowError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**data** | [**ContextOverflowErrorData**](ContextOverflowErrorData.md) |  | 

## Example

```python
from opencode_sdk.models.context_overflow_error import ContextOverflowError

# TODO update the JSON string below
json = "{}"
# create an instance of ContextOverflowError from a JSON string
context_overflow_error_instance = ContextOverflowError.from_json(json)
# print the JSON string representation of the object
print(ContextOverflowError.to_json())

# convert the object into a dict
context_overflow_error_dict = context_overflow_error_instance.to_dict()
# create an instance of ContextOverflowError from a dict
context_overflow_error_from_dict = ContextOverflowError.from_dict(context_overflow_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



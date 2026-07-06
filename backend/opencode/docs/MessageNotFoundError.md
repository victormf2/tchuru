# MessageNotFoundError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tag** | **str** |  | 
**session_id** | **str** |  | 
**message_id** | **str** |  | 
**message** | **str** |  | 

## Example

```python
from opencode_sdk.models.message_not_found_error import MessageNotFoundError

# TODO update the JSON string below
json = "{}"
# create an instance of MessageNotFoundError from a JSON string
message_not_found_error_instance = MessageNotFoundError.from_json(json)
# print the JSON string representation of the object
print(MessageNotFoundError.to_json())

# convert the object into a dict
message_not_found_error_dict = message_not_found_error_instance.to_dict()
# create an instance of MessageNotFoundError from a dict
message_not_found_error_from_dict = MessageNotFoundError.from_dict(message_not_found_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# MessageAbortedError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**data** | [**MoveSessionErrorData**](MoveSessionErrorData.md) |  | 

## Example

```python
from opencode_sdk.models.message_aborted_error import MessageAbortedError

# TODO update the JSON string below
json = "{}"
# create an instance of MessageAbortedError from a JSON string
message_aborted_error_instance = MessageAbortedError.from_json(json)
# print the JSON string representation of the object
print(MessageAbortedError.to_json())

# convert the object into a dict
message_aborted_error_dict = message_aborted_error_instance.to_dict()
# create an instance of MessageAbortedError from a dict
message_aborted_error_from_dict = MessageAbortedError.from_dict(message_aborted_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# AssistantMessageError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**data** | [**APIErrorData**](APIErrorData.md) |  | 

## Example

```python
from opencode_sdk.models.assistant_message_error import AssistantMessageError

# TODO update the JSON string below
json = "{}"
# create an instance of AssistantMessageError from a JSON string
assistant_message_error_instance = AssistantMessageError.from_json(json)
# print the JSON string representation of the object
print(AssistantMessageError.to_json())

# convert the object into a dict
assistant_message_error_dict = assistant_message_error_instance.to_dict()
# create an instance of AssistantMessageError from a dict
assistant_message_error_from_dict = AssistantMessageError.from_dict(assistant_message_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



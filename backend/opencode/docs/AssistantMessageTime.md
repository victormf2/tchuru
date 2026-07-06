# AssistantMessageTime


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **int** |  | 
**completed** | **int** |  | [optional] 

## Example

```python
from opencode_sdk.models.assistant_message_time import AssistantMessageTime

# TODO update the JSON string below
json = "{}"
# create an instance of AssistantMessageTime from a JSON string
assistant_message_time_instance = AssistantMessageTime.from_json(json)
# print the JSON string representation of the object
print(AssistantMessageTime.to_json())

# convert the object into a dict
assistant_message_time_dict = assistant_message_time_instance.to_dict()
# create an instance of AssistantMessageTime from a dict
assistant_message_time_from_dict = AssistantMessageTime.from_dict(assistant_message_time_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



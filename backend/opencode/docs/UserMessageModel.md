# UserMessageModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provider_id** | **str** |  | 
**model_id** | **str** |  | 
**variant** | **str** |  | [optional] 

## Example

```python
from opencode_sdk.models.user_message_model import UserMessageModel

# TODO update the JSON string below
json = "{}"
# create an instance of UserMessageModel from a JSON string
user_message_model_instance = UserMessageModel.from_json(json)
# print the JSON string representation of the object
print(UserMessageModel.to_json())

# convert the object into a dict
user_message_model_dict = user_message_model_instance.to_dict()
# create an instance of UserMessageModel from a dict
user_message_model_from_dict = UserMessageModel.from_dict(user_message_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



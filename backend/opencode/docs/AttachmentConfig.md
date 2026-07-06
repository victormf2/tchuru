# AttachmentConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image** | [**ImageAttachmentConfig**](ImageAttachmentConfig.md) |  | [optional] 

## Example

```python
from opencode_sdk.models.attachment_config import AttachmentConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AttachmentConfig from a JSON string
attachment_config_instance = AttachmentConfig.from_json(json)
# print the JSON string representation of the object
print(AttachmentConfig.to_json())

# convert the object into a dict
attachment_config_dict = attachment_config_instance.to_dict()
# create an instance of AttachmentConfig from a dict
attachment_config_from_dict = AttachmentConfig.from_dict(attachment_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



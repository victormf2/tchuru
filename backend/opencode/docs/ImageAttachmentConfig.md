# ImageAttachmentConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_resize** | **bool** |  | [optional] 
**max_width** | **int** |  | [optional] 
**max_height** | **int** |  | [optional] 
**max_base64_bytes** | **int** |  | [optional] 

## Example

```python
from opencode_sdk.models.image_attachment_config import ImageAttachmentConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ImageAttachmentConfig from a JSON string
image_attachment_config_instance = ImageAttachmentConfig.from_json(json)
# print the JSON string representation of the object
print(ImageAttachmentConfig.to_json())

# convert the object into a dict
image_attachment_config_dict = image_attachment_config_instance.to_dict()
# create an instance of ImageAttachmentConfig from a dict
image_attachment_config_from_dict = ImageAttachmentConfig.from_dict(image_attachment_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



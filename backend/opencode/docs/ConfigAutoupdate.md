# ConfigAutoupdate

Automatically update to the latest version. Set to true to auto-update, false to disable, or 'notify' to show update notifications

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------

## Example

```python
from opencode_sdk.models.config_autoupdate import ConfigAutoupdate

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigAutoupdate from a JSON string
config_autoupdate_instance = ConfigAutoupdate.from_json(json)
# print the JSON string representation of the object
print(ConfigAutoupdate.to_json())

# convert the object into a dict
config_autoupdate_dict = config_autoupdate_instance.to_dict()
# create an instance of ConfigAutoupdate from a dict
config_autoupdate_from_dict = ConfigAutoupdate.from_dict(config_autoupdate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



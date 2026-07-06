# ConfigWatcher


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ignore** | **List[str]** |  | [optional] 

## Example

```python
from opencode_sdk.models.config_watcher import ConfigWatcher

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigWatcher from a JSON string
config_watcher_instance = ConfigWatcher.from_json(json)
# print the JSON string representation of the object
print(ConfigWatcher.to_json())

# convert the object into a dict
config_watcher_dict = config_watcher_instance.to_dict()
# create an instance of ConfigWatcher from a dict
config_watcher_from_dict = ConfigWatcher.from_dict(config_watcher_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ConfigCompaction


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto** | **bool** |  | [optional] 
**prune** | **bool** |  | [optional] 
**tail_turns** | **int** |  | [optional] 
**preserve_recent_tokens** | **int** |  | [optional] 
**reserved** | **int** |  | [optional] 

## Example

```python
from opencode_sdk.models.config_compaction import ConfigCompaction

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigCompaction from a JSON string
config_compaction_instance = ConfigCompaction.from_json(json)
# print the JSON string representation of the object
print(ConfigCompaction.to_json())

# convert the object into a dict
config_compaction_dict = config_compaction_instance.to_dict()
# create an instance of ConfigCompaction from a dict
config_compaction_from_dict = ConfigCompaction.from_dict(config_compaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



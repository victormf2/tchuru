# Config


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | **str** |  | [optional] 
**shell** | **str** |  | [optional] 
**log_level** | [**LogLevel**](LogLevel.md) |  | [optional] 
**server** | [**ServerConfig**](ServerConfig.md) |  | [optional] 
**command** | [**Dict[str, ConfigCommandValue]**](ConfigCommandValue.md) |  | [optional] 
**skills** | [**ConfigSkills**](ConfigSkills.md) |  | [optional] 
**references** | [**Dict[str, ConfigReferencesValue]**](ConfigReferencesValue.md) |  | [optional] 
**reference** | [**Dict[str, ConfigReferencesValue]**](ConfigReferencesValue.md) |  | [optional] 
**watcher** | [**ConfigWatcher**](ConfigWatcher.md) |  | [optional] 
**snapshot** | **bool** |  | [optional] 
**plugin** | [**List[ConfigPluginInner]**](ConfigPluginInner.md) |  | [optional] 
**share** | **str** |  | [optional] 
**autoshare** | **bool** |  | [optional] 
**autoupdate** | [**ConfigAutoupdate**](ConfigAutoupdate.md) |  | [optional] 
**disabled_providers** | **List[str]** |  | [optional] 
**enabled_providers** | **List[str]** |  | [optional] 
**model** | **str** |  | [optional] 
**small_model** | **str** |  | [optional] 
**default_agent** | **str** |  | [optional] 
**username** | **str** |  | [optional] 
**mode** | [**ConfigMode**](ConfigMode.md) |  | [optional] 
**agent** | [**ConfigAgent**](ConfigAgent.md) |  | [optional] 
**provider** | [**Dict[str, ProviderConfig]**](ProviderConfig.md) |  | [optional] 
**mcp** | [**Dict[str, ConfigMcpValue]**](ConfigMcpValue.md) |  | [optional] 
**formatter** | [**ConfigFormatter**](ConfigFormatter.md) |  | [optional] 
**lsp** | [**ConfigLsp**](ConfigLsp.md) |  | [optional] 
**instructions** | **List[str]** |  | [optional] 
**layout** | [**LayoutConfig**](LayoutConfig.md) |  | [optional] 
**permission** | [**PermissionConfig**](PermissionConfig.md) |  | [optional] 
**tools** | **Dict[str, bool]** |  | [optional] 
**attachment** | [**AttachmentConfig**](AttachmentConfig.md) |  | [optional] 
**enterprise** | [**ConfigEnterprise**](ConfigEnterprise.md) |  | [optional] 
**tool_output** | [**ConfigToolOutput**](ConfigToolOutput.md) |  | [optional] 
**compaction** | [**ConfigCompaction**](ConfigCompaction.md) |  | [optional] 
**experimental** | [**ConfigExperimental**](ConfigExperimental.md) |  | [optional] 

## Example

```python
from opencode_sdk.models.config import Config

# TODO update the JSON string below
json = "{}"
# create an instance of Config from a JSON string
config_instance = Config.from_json(json)
# print the JSON string representation of the object
print(Config.to_json())

# convert the object into a dict
config_dict = config_instance.to_dict()
# create an instance of Config from a dict
config_from_dict = Config.from_dict(config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



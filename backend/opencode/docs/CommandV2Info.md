# CommandV2Info


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**template** | **str** |  | 
**description** | **str** |  | [optional] 
**agent** | **str** |  | [optional] 
**model** | [**ModelRef**](ModelRef.md) |  | [optional] 
**subtask** | **bool** |  | [optional] 

## Example

```python
from opencode_sdk.models.command_v2_info import CommandV2Info

# TODO update the JSON string below
json = "{}"
# create an instance of CommandV2Info from a JSON string
command_v2_info_instance = CommandV2Info.from_json(json)
# print the JSON string representation of the object
print(CommandV2Info.to_json())

# convert the object into a dict
command_v2_info_dict = command_v2_info_instance.to_dict()
# create an instance of CommandV2Info from a dict
command_v2_info_from_dict = CommandV2Info.from_dict(command_v2_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



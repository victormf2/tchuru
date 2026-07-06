# SkillV2Source


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**path** | **str** |  | 
**url** | **str** |  | 
**skill** | [**SkillV2Info**](SkillV2Info.md) |  | 

## Example

```python
from opencode_sdk.models.skill_v2_source import SkillV2Source

# TODO update the JSON string below
json = "{}"
# create an instance of SkillV2Source from a JSON string
skill_v2_source_instance = SkillV2Source.from_json(json)
# print the JSON string representation of the object
print(SkillV2Source.to_json())

# convert the object into a dict
skill_v2_source_dict = skill_v2_source_instance.to_dict()
# create an instance of SkillV2Source from a dict
skill_v2_source_from_dict = SkillV2Source.from_dict(skill_v2_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



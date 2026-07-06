# SkillV2Info


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**description** | **str** |  | [optional] 
**slash** | **bool** |  | [optional] 
**location** | **str** |  | 
**content** | **str** |  | 

## Example

```python
from opencode_sdk.models.skill_v2_info import SkillV2Info

# TODO update the JSON string below
json = "{}"
# create an instance of SkillV2Info from a JSON string
skill_v2_info_instance = SkillV2Info.from_json(json)
# print the JSON string representation of the object
print(SkillV2Info.to_json())

# convert the object into a dict
skill_v2_info_dict = skill_v2_info_instance.to_dict()
# create an instance of SkillV2Info from a dict
skill_v2_info_from_dict = SkillV2Info.from_dict(skill_v2_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



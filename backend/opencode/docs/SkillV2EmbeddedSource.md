# SkillV2EmbeddedSource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**skill** | [**SkillV2Info**](SkillV2Info.md) |  | 

## Example

```python
from opencode_sdk.models.skill_v2_embedded_source import SkillV2EmbeddedSource

# TODO update the JSON string below
json = "{}"
# create an instance of SkillV2EmbeddedSource from a JSON string
skill_v2_embedded_source_instance = SkillV2EmbeddedSource.from_json(json)
# print the JSON string representation of the object
print(SkillV2EmbeddedSource.to_json())

# convert the object into a dict
skill_v2_embedded_source_dict = skill_v2_embedded_source_instance.to_dict()
# create an instance of SkillV2EmbeddedSource from a dict
skill_v2_embedded_source_from_dict = SkillV2EmbeddedSource.from_dict(skill_v2_embedded_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


